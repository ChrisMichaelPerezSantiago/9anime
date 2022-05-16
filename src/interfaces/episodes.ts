import type { Nullable } from "../types";

export interface IEpisodes {
  episode: Nullable<string>;
  epURL: Nullable<string>;
  animeName?: Nullable<string>;
  time?: Nullable<string>;
}
