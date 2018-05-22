# seek-torrent [![Build Status](https://travis-ci.org/Eli-Goldberg/seek-torrent.svg?branch=master)](https://travis-ci.org/Eli-Goldberg/seek-torrent)

Finds torrents (Movies / Series) accross multiple sources


## Install:
```bash
$ npm install seek-torrent
```

## Usage:
```javascript
var seekTorrent = require('seek-torrent');

(async function () {
  let results = await seekTorrent.search('stating alive s05e02', { type: 'series' });
  
  /*
  [
    { 
      season: 5,
      episode: 2,
      resolution: '720p',
      quality: 'HDTV',
      codec: 'x264',
      group: 'KILLERS[rartv]',
      sourceName: 'Eztv',
      fileName: 'The.Staying.Alive.S05E02.720p.HDTV.x264-KILLERS[rartv]',
      title: 'The Staying Alive' 
    },
    ...
    ]
  */

  results = await seekTorrent.search('captain america winter soldier', { type: 'series' });
  
  /*
  [
    { 
      year: 2014,
      resolution: '1080p',
      quality: 'BrRip',
      codec: 'x264',
      group: 'YIFY',
      sourceName: 'Extra Torrent',
      fileName: 'Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY',
      title: 'Captain Russia The Summer Soldier' 
    }
  ]
  */
  

})();

```

Thanks to [@jzjzjzj/parse-torrent-name](https://github.com/jzjzjzj/parse-torrent-name) - these following fields that are extracted (in addition to fileName, sourceName:

**Possible parts extracted:**

- audio
- codec
- container
- episode
- episodeName
- excess
- extended
- garbage
- group
- hardcoded
- language
- proper
- quality
- region
- repack
- resolution
- season
- title
- website
- widescreen
- year
