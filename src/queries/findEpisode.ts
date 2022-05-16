import _ from "lodash";
import { getAllEpisodes } from "../episodes";

export const findEpisode = async (
  epURL: string,
  episode: string | null
): Promise<string | null> => {
  const chaptersList = await getAllEpisodes(epURL);

  return _.find(chaptersList, { episode })?.epURL || null;
};
