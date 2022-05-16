import { getAllEpisodes } from "./episodes";
import { getSchedule } from "./schedule";
import { getEpisodeSources } from "./sources";

// (async () => {
//   const r = await getSchedule();

//   console.log(r.find((p) => p.date === "2022-05-16"));
// })();

// (async () => {
//   const r = await getAllEpisodes("https://9anime.vc/watch/tokyo-ghoul-790");

//   console.log(r.map((r) => r));
// })();

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

export default {
  getAllEpisodes,
  getSchedule,
  getEpisodeSources,
};
