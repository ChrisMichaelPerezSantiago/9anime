# ✓ 9anime (PoC) / Anime Scraper

> Anime - Server Scraper

## ⚠️ work in progress ...

# Environment

Create a `.env` file in the root of your project:

```sh
BASE_URL=https://9anime.vc
```

# 📚 Documentation

## `getAllEpisodes(epURL: string)`

Episode List

```ts
(async () => {
  const episodeList = await getAllEpisodes(
    "https://9anime.vc/watch/tokyo-ghoul-790"
  );
})();
```

<details>
<summary>Episodes JSON</summary>

```json
[
  {
    "episode": "1",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13547"
  },
  {
    "episode": "2",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13548"
  },
  {
    "episode": "3",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13549"
  },
  {
    "episode": "4",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13550"
  },
  {
    "episode": "5",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13551"
  },
  {
    "episode": "6",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13552"
  },
  {
    "episode": "7",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13553"
  },
  {
    "episode": "8",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13554"
  },
  {
    "episode": "9",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13555"
  },
  {
    "episode": "10",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13556"
  },
  {
    "episode": "11",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13557"
  },
  {
    "episode": "12",
    "epURL": "https://9anime.vc/watch/tokyo-ghoul-790?ep=13558"
  }
]
```

</details>

## `getEpisodeSources(epURL: string)`

Episode Sources (servers).

```ts
(async () => {
  const sources = await getEpisodeSources(
    "https://9anime.vc/watch/tokyo-ghoul-790?ep=13547"
  );
})();
```

<details>
<summary>Sources JSON</summary>

```json
[
  {
    "type": "dub",
    "serverName": "Vidstreaming",
    "server": {
      "sources": [
        {
          "file": "*.m3u8", // m3u8 URL
          "type": "hls"
        }
      ],
      "sourcesBackup": [],
      "tracks": [
        {
          "file": null,
          "kind": "thumbnails"
        }
      ],
      "server": 4
    }
  } // more ...
]
```

</details>

## `getSchedule()`

Monthly schedule on broadcast of each episode.

```ts
(async () => {
  const schedule = await getSchedule();
})();
```

<details>
<summary>Schedule JSON</summary>

```json
[
  {
    "date": "2022-05-16",
    "episodes": [
      {
        "episode": "7",
        "epURL": "https://9anime.vc/watch/yuu-gi-ou-go-rush-18000?ep=90911",
        "animeName": "Yuu Gi Ou: Go Rush!!",
        "time": "04:00"
      },
      {
        "episode": "7",
        "epURL": null,
        "animeName": "Healer Girl",
        "time": "17:30"
      },
      {
        "episode": "6",
        "epURL": null,
        "animeName": "AMAIM Warrior at the Borderline",
        "time": "19:00"
      },
      {
        "episode": "6",
        "epURL": null,
        "animeName": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season",
        "time": "22:00"
      }
    ]
  } // more ...
]
```

</details>

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [9anime](https://github.com/ChrisMichaelPerezSantiago/9anime).
