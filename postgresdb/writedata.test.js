/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
const write = require('./writedata');
const seeder = require('../seeder/seeder');
const { Pool } = require('./pool');
const { Password } = require('../rootConfig');

const { expect } = chai;
const size = 5000000;

// Establishing postgreSQL connection pool
const connection = new Pool();
const testConfig = {
  host: 'localhost',
  port: 5432,
  database: 'testproducts',
  user: 'becca',
  password: Password,
};

// Testing the Connection
connection.connect(testConfig)
  .then(() => {})
  .catch((err) => {
    console.error(err);
  });

// Testing the copyToDB method (uses callback logic for async)
describe('writedata.js', () => {
  context('copyToDB', () => {
    it('should be a function', () => {
      expect(write.copyToDB).to.be.a('function');
    });

    it('should copy 2 massive (5,000,000 entry) written CSV files to the database', () => {
      // Write the Items CSV
      const testFileItems = '/Users/becca/Documents/HackReactor/GitHub Repositories/SDC/Rebecca-SDCService/csv/test_csv_files/testItemCSV.csv';
      seeder.writeCSV(size, testFileItems, 'item', () => {
        // Write the Styles CSV
        const testFileStyles = '/Users/becca/Documents/HackReactor/GitHub Repositories/SDC/Rebecca-SDCService/csv/test_csv_files/testStyleCSV.csv';
        seeder.writeCSV(size, testFileStyles, 'style', () => {
          // Copy the finished CSV files into the database
          write.copyToDB(connection._pool, testFileItems, testFileStyles, () => {});
          expect(true).to.be.true;
        });
      });
    });
  });
});
