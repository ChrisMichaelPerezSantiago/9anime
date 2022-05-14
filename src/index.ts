import { load } from "cheerio";
import { PromisePool } from "@supercharge/promise-pool";
import request from "./request";
import Utils from "./Utils";
import type { IServersDataIdProps, IServersDataIdRoot } from "./interfaces";

const utils = new Utils();

const getSources = async (dataId: string | null) => {
  // eslint-disable-next-line antfu/if-newline
  if (!dataId) return { sources: null };

  const response = await request({
    method: "get",
    url: `https://9anime.vc/ajax/episode/sources?${utils.buildQuery({
      id: dataId,
    })}`,
  });

  // eslint-disable-next-line antfu/if-newline
  if (!response.link) return { sources: null };

  const id = response.link.split("/")[4].split("?")[0];

  const sources = await request({
    method: "get",
    url: `https://rapid-cloud.ru/ajax/embed-6/getSources?${utils.buildQuery({
      id,
    })}`,
  });

  return sources;
};

export const getEpisodeSources = async (
  epURL: string
): Promise<IServersDataIdRoot[]> => {
  // eslint-disable-next-line antfu/if-newline
  if (!epURL) throw new Error("Provide epURL property");

  const params = new URLSearchParams(epURL?.split("?")[1]);

  const response = await request({
    method: "get",
    url: `https://9anime.vc/ajax/episode/servers?${utils.buildQuery({
      episodeId: params.get("ep"),
    })}`,
  });

  const html = response.html.toString();
  const $ = load(html);

  const serversDataId: IServersDataIdProps[] = await Promise.all(
    $("div.ps__-list div.item")
      .map(
        (_, element) =>
          new Promise<IServersDataIdProps>((resolve, reject) => {
            try {
              const $el = $(element);
              const dataId = $el.attr("data-id")?.trim() || null;
              const dataType = $el.attr("data-type")?.trim() || null;
              const serverName = $el.find("a").text().trim() || null;

              resolve({ dataId, dataType, serverName });
            } catch (error) {
              reject(error);
            }
          })
      )
      .get()
  );

  const { results } = await PromisePool.withConcurrency(10)
    .for(serversDataId)
    .process(async (props: IServersDataIdProps) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return {
        type: props.dataType,
        serverName: props.serverName,
        server: await getSources(props.dataId),
      };
    });

  return results;
};

// (async () => {
//   const r = await getEpisodeSources(
//     "https://9anime.vc/watch/tokyo-ghoul-790?ep=13547"
//   );
//   console.log(
//     JSON.stringify(
//       r.map((r) => r),
//       null,
//       2
//     )
//   );
// })();
