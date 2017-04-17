const TorrentSource = require('./../src/sources/torrentSource');

class TestSource extends TorrentSource {
  constructor(name, options) {
    super(name, options);
  }
  async search(results) {
    return super.reconstitute(results);
  }
}

module.exports = TestSource;
