const TorrentSource = require('./torrentSource');
const eztv = require('torrentflix/lib/eztv');

const SOURCE_NAME = 'Eztv';

class EztvSearch extends TorrentSource {
  constructor(options) {
    super(SOURCE_NAME, options);
    this.baseUrl = 'https://www.eztv.ag';
  }
  async search(searchQuery) {
    try {
      const results = await eztv.search(searchQuery, this.baseUrl);
      return this.reconstitute(results);
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

module.exports = EztvSearch;
