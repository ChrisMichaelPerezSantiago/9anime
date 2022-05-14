export default class Utils {
  constructor() {}

  public buildQuery(obj: object) {
    return Object.entries(obj)
      .map((prop: any) => prop.map(encodeURIComponent).join("="))
      .join("&");
  }
}
