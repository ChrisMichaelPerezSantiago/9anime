import type { Nullable } from "../types";
import type { IEpisodes } from "./episodes";

export interface ISchedule {
  date: Nullable<string>;
  episodes: Nullable<IEpisodes[]>;
}
