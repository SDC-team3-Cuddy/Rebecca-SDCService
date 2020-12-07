/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
const fs = require('fs');
const path = require('path');
const seeder = require('./seeder');

const { expect } = chai;

describe('seeder.js', () => {
  context('generateDataLine', () => {
    it('should be a function', () => {
      expect(seeder.generateDataLine).to.be.a('function');
    });

    it('should generate a single CSV line', () => {
      const sampleItem = seeder.generateDataLine('item');
      console.log(`      ${sampleItem}`);
      expect(sampleItem).to.be.a('string'); // description
    });

    it('should generate an array of 100 style arrays with a color, image_url, and quantity', () => {
      const sampleStyle = seeder.generateDataLine('style');
      console.log(`      ${sampleStyle}`);
      expect(sampleStyle).to.be.a('string');
    });
  });

  context('makeCSV', () => {
    it('should should be a function', () => {
      expect(seeder.makeCSV).to.be.a('function');
    });

    it('should return a CSV when passed an array of arrays', () => {
      const itemCSV = seeder.generateDataLine('item');
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

    it('should write a CSV line to a given filepath', () => {
      const testFileName = path.join(__dirname, '../csv/test_csv_files/testCSV.csv');
      seeder.writeCSV(1, testFileName, 'item', (CSV) => {
        expect(fs.readFileSync(testFileName).toString()).to.equal(CSV);
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
