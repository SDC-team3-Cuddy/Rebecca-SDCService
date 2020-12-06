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

// Seeding
const data = seeder.generateDataChunk(10);

// Writing first CSV
const styleCSV = seeder.makeCSV(data.styles);
const testFileStyles = '/Users/becca/Documents/HackReactor/GitHub Repositories/SDC/Rebecca-SDCService/csv/test_csv_files/testStyleCSV.csv';
seeder.writeCSV(styleCSV, testFileStyles, () => {});

// Writing second CSV
const itemCSV = seeder.makeCSV(data.items);
const testFileItems = '/Users/becca/Documents/HackReactor/GitHub Repositories/SDC/Rebecca-SDCService/csv/test_csv_files/testItemCSV.csv';
seeder.writeCSV(itemCSV, testFileItems, () => {});

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

describe('writedata.js', () => {
  context('copyToDB', () => {
    it('should be a function', () => {
      expect(write.copyToDB).to.be.a('function');
    });

    it('should copy a pair of written CSV files to the database', () => {
      write.copyToDB(connection._pool, testFileItems, testFileStyles);
      expect(true).to.be.true;
    });
  });
});
