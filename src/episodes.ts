import { load } from "cheerio";
import config from "./config";
import type { IEpisodes } from "./interfaces/episodes";
import request from "./request";
import Utils from "./Utils";

const utils = new Utils();

export const getAllEpisodes = async (epURL: string): Promise<IEpisodes[]> => {
  // eslint-disable-next-line antfu/if-newline
  if (!epURL) throw new Error("Provide epURL property");

  const slug = epURL.substring(epURL.lastIndexOf("-") + 1);

  const response = await request({
    method: "get",
    url: `${config.BASE_URL}/ajax/episode/list/${slug}`,
  });

  const html = response.html.toString();
  const $ = load(html);

  const episodes: IEpisodes[] = await Promise.all(
    $("div.episodes-ul a")
      .map(
        (_, element) =>
          new Promise<IEpisodes>((resolve, reject) => {
            try {
              const $el = $(element);
              const _epURL = `${config.BASE_URL}${$el.attr("href")}`;
              const episode = $el.find("div.order").text().trim();
              resolve({ episode, epURL: _epURL });
            } catch (error) {
              reject(error);
            }
          })
      )
      .get()
  );

  return episodes;
};

export const getEpisodesListByDateHTML = async (
  date: string
): Promise<string | null> => {
  const response = await request({
    method: "get",
    url: `${config.BASE_URL}/ajax/schedule/list?${utils.buildQuery({
      tzOffset: "-180",
      date,
    })}`,
  });

  // eslint-disable-next-line antfu/if-newline
  if (!response.html) return null;

  const html = response.html.toString();
  return html;
};
