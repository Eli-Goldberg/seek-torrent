const ptn = require('parse-torrent-name');

class TorrentSource {
  constructor(sourceName, options) {
    this.sourceName = sourceName;
    this.options = options;
  }

  reconstitute(searchResults) {
    const parsedResults = [];
    searchResults.forEach(searchResult => {
      try {
        const torrentData = ptn(searchResult.title);
        torrentData.fileName = searchResult.title;

        if (this.options && this.options.type) {
          if (!this.isTorrentOfType(torrentData, this.options.type)) return;
        }

        if (searchResult.size) torrentData.size = searchResult.size;
        if (searchResult.torrent_link) torrentData.link = searchResult.torrent_link;

        if (this.sourceName) torrentData.sourceName = this.sourceName;
        parsedResults.push(torrentData);
      }
      catch (err) {
        console.error(err);
      }
    });

    return parsedResults;
  }

  isTorrentOfType(torrent, type) {
    const isSeries =
      torrent.episode !== null && torrent.episode !== undefined && torrent.episode !== '' &&
      torrent.season !== null && torrent.season !== undefined && torrent.season !== '';

    if (type === 'movie') return !isSeries;
    if (type === 'series') return isSeries;
    return true;
  }
}

module.exports = TorrentSource;
