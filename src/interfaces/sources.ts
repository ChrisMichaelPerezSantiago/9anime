import type { Nullable } from "../types";

export interface IServersDataIdRoot {
  type: Nullable<string>;
  serverName: Nullable<string>;
  server: Nullable<any>;
}

export interface IServersDataIdProps {
  dataId: Nullable<string>;
  dataType: Nullable<string>;
  serverName: Nullable<string>;
}
