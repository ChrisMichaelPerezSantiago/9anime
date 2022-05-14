# ✓ 9anime (PoC) / Anime Scraper

> Anime - Server Scraper

## ⚠️ work in progress ...

# 📚 Documentation

## `getEpisodeSources(epURL: string)`

Episode Sources (servers).

```ts
const chapter = await getEpisodeSources(
  "https://9anime.vc/watch/tokyo-ghoul-790?ep=13547"
);
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
