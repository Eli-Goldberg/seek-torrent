const EztvSearch = require('./sources/eztv');
const ExtraTorrentSearch = require('./sources/extraTorrent');

async function search(query, options) {
  try {
    let results = await Promise.all([
      new ExtraTorrentSearch(options).search(query),
      new EztvSearch(options).search(query)
    ]);

    results = results.reduce((a, b) => {
      a.push(...b);
      return a;
    }, []);
    return results;

  } catch (err) {
    console.error(err);
    return [];
  }
}

module.exports = {
  search
};
