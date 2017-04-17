const TestSource = require('./testSource');
const { expect } = require('chai');

describe('torrentSource -', function () {
  it('should add fileName, sourceName', async function () {
    const test = new TestSource('testSource');
    const results = await test.search([{ title: 'Test Result 2017' }]);
    expect(results[0].sourceName).to.equal('testSource');
    expect(results[0].fileName).to.equal('Test Result 2017');
  });

  describe('options.type -', function () {
    const testResults = [
      { title: 'Test Result 2017 s01e06' },
      { title: 'Test Result 2017 1x10' },
      { title: 'Test Result 2017' }
    ];

    it('should return type: movie', async function () {
      const test = new TestSource('testSource', { type: 'movie' });
      const results = await test.search(testResults);
      expect(results.length).to.equal(1);
      expect(Object.keys(results[0])).not.to.include('episode');
      expect(Object.keys(results[0])).not.to.include('season');
    });
    it('should return type: series', async function () {
      const test = new TestSource('testSource', { type: 'series' });
      const results = await test.search(testResults);
      expect(results.length).to.equal(2);
      expect(Object.keys(results[0])).to.include('episode');
      expect(Object.keys(results[0])).to.include('season');
      expect(Object.keys(results[1])).to.include('episode');
      expect(Object.keys(results[1])).to.include('season');
    });
    it('should ignore if type is null', async function () {
      const test = new TestSource('testSource', {});
      const results = await test.search(testResults);
      expect(results.length).to.equal(3);
    });
  });
});
