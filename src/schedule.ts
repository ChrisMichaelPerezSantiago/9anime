import { PromisePool } from "@supercharge/promise-pool";
import { load } from "cheerio";
import config from "./config";
import { getEpisodesListByDateHTML } from "./episodes";
import type { IEpisodes } from "./interfaces/episodes";
import type { ISchedule } from "./interfaces/schedule";
import { findEpisode } from "./queries/findEpisode";
import Utils from "./Utils";

const utils = new Utils();

export const getSchedule = async (): Promise<ISchedule[]> => {
  const daysOfMonth = utils.getDaysOfMonth();

  const { results } = await PromisePool.withConcurrency(10)
    .for(daysOfMonth)
    .process(async (prop: string) => {
      const html = await getEpisodesListByDateHTML(prop);
      const $ = load(html);

      const episodesByDate: IEpisodes[] = await Promise.all(
        $("li a")
          .map(
            (_, element) =>
              new Promise<IEpisodes>(async (resolve, reject) => {
                try {
                  const $el = $(element);
                  const epURL = `${config.BASE_URL}${$el.attr("href")}`;
                  // eslint-disable-next-line operator-linebreak
                  const episode =
                    $el
                      .find("div.film-detail div.fd-play button")
                      .text()
                      .trim()
                      .match(/\d+/g)?.[0] || null;

                  const time = $el.find("div.time").text().trim();
                  const animeName = $el
                    .find("div.film-detail h3")
                    .text()
                    .trim();

                  const _epURL = await findEpisode(epURL, episode);

                  resolve({
                    episode,
                    epURL: _epURL,
                    animeName,
                    time,
                  });
                } catch (error) {
                  reject(error);
                }
              })
          )
          .get()
      );

      return {
        date: prop,
        episodes: episodesByDate,
      };
    });

  return results;
};
