const TorrentSource = require('./torrentSource');
const extraTorrent = require('torrentflix/lib/extratorrent');

const SOURCE_NAME = 'Extra Torrent';

class ExtraTorrentSearch extends TorrentSource {
  constructor(options) {
    super(SOURCE_NAME, options);
    this.baseUrl = 'http://extratorrent.cc';
  }

  async search(searchQuery) {
    try {
      const results = await extraTorrent.search(searchQuery, this.baseUrl);
      results.splice(0, 2); // Remove header junk
      return super.reconstitute(results);
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

module.exports = ExtraTorrentSearch;
