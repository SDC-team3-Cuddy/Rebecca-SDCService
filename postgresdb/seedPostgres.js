/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const write = require('./writedata');
const seeder = require('../seeder/seeder');
const { Pool } = require('./pool');
const { Password } = require('../rootConfig');

const size = 5000000;

// Establishing postgreSQL connection pool
const connection = new Pool();
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'products',
  user: 'becca',
  password: Password,
};

// Testing the Connection
connection.connect(dbConfig)
  .then(() => {
    console.log(`connected to database: ${dbConfig.database}`);
  })
  .catch((err) => {
    console.error(err);
  });

// copyToDB method (uses callback logic for async)
// Write the Items CSV
const fileItems = '/Users/becca/Documents/HackReactor/GitHub Repositories/SDC/Rebecca-SDCService/csv/itemsCSV.csv';
console.log('Writing Item CSV');
seeder.writeCSV(size, fileItems, 'item', () => {
  // Write the Styles CSV
  console.log('Writing Style CSV');
  const fileStyles = '/Users/becca/Documents/HackReactor/GitHub Repositories/SDC/Rebecca-SDCService/csv/stylesCSV.csv';
  seeder.writeCSV(size, fileStyles, 'style', () => {
    // Copy the finished CSV files into the database
    console.log('Copying CSV Files to Database');
    write.copyToDB(connection._pool, fileItems, fileStyles, () => {
      console.log('Database Seeded');
    });
  });
});
