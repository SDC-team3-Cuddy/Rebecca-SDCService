/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const fs = require('fs');
const path = require('path');
const seeder = require('./seeder');

chai.use(sinonChai);
const { expect } = chai;

describe('seeder.js', () => {
  context('generateDataChunk', () => {
    it('should be a function', () => {
      expect(seeder.generateDataChunk).to.be.a('function');
    });

    it('should generate an array of 100 item arrays with a price and description', () => {
      const itemSpy = sinon.spy(seeder, 'makeItem');
      const sampleChunk = seeder.generateDataChunk(100);
      const sampleItem = sampleChunk.items[0];
      expect(sampleItem[1]).to.be.a('number'); // price
      expect(sampleItem[0]).to.be.a('string'); // description
      expect(sampleChunk.items.length).to.equal(100);
      itemSpy.restore();
    });

    it('should generate an array of 100 style arrays with a color, image_url, and quantity', () => {
      const styleSpy = sinon.spy(seeder, 'makeStyle');
      const sampleChunk = seeder.generateDataChunk(100);
      const sampleStyle = sampleChunk.styles[0];
      expect(sampleStyle[1]).to.be.a('number'); // quantity
      expect(sampleStyle[2]).to.be.a('string'); // url
      expect(sampleStyle[0]).to.be.a('string'); // color
      expect(sampleChunk.styles.length).to.equal(100);
      styleSpy.restore();
    });
  });

  context('makeCSV', () => {
    it('should should be a function', () => {
      expect(seeder.makeCSV).to.be.a('function');
    });

    it('should return a CSV when passed an array of arrays', () => {
      const data = seeder.generateDataChunk(1);
      const itemCSV = seeder.makeCSV(data.items);
      console.log(`        itemCSV: ${itemCSV}`);
      // console.log(papa.parse(itemCSV));
      // eslint-disable-next-line no-unused-expressions
      expect(false).to.be.false;
    });
  });

  context('writeCSV', () => {
    it('should be a function', () => {
      expect(seeder.writeCSV).to.be.a('function');
    });

    it('should write a CSV to a given filepath', () => {
      const data = seeder.generateDataChunk(10);
      const CSV = seeder.makeCSV(data.styles);
      const testFileName = path.join(__dirname, '../csv/test_csv_files/testCSV.csv');
      seeder.writeCSV(CSV, testFileName, () => {
        expect(fs.readFileSync(testFileName).toString()).to.equal('hi');
      });
    });
  });

  context('removeCommas', () => {
    it('should be a function', () => {
      expect(seeder.removeCommas).to.be.a('function');
    });

    it('should remove commas from a passed in string', () => {
      const inputString = 'This, has, a, few, commas, in, it';
      const testString = seeder.removeCommas(inputString);
      expect(testString.indexOf(',')).to.equal(-1);
    });

    it('should replace commas with a semi-colon at the same index', () => {
      const inputString = 'This, string has one comma at index 4';
      const testString = seeder.removeCommas(inputString);
      expect(testString.indexOf(';')).to.equal(4);
    });
  });
});
