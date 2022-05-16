import moment from "moment";
export default class Utils {
  constructor() {}

  public buildQuery(obj: object) {
    return Object.entries(obj)
      .map((prop: any) => prop.map(encodeURIComponent).join("="))
      .join("&");
  }

  public getDaysOfMonth(): string[] {
    let daysInMonth = moment().daysInMonth();
    const arrDays: string[] = [];

    while (daysInMonth) {
      const current = moment().date(daysInMonth);
      arrDays.push(current.format("YYYY-MM-DD"));

      daysInMonth--;
    }

    arrDays.sort();

    return arrDays;
  }
}
