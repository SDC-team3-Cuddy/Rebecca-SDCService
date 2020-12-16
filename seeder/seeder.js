/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const faker = require('faker');
const papa = require('papaparse');
const fs = require('fs');

const makeCSV = (data) => papa.unparse(data);

const removeCommas = (string) => {
  const stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === ',') {
      stringArr[i] = ';';
    }
  }
  return stringArr.join('');
};

const makeItem = (id) => {
  const item = [];
  const description = removeCommas(faker.commerce.productDescription());
  item.push(id);
  item.push(description);
  item.push(faker.random.float());
  return item;
};

const makeStyle = (num, id) => {
  const style = [];
  style.push(id);
  style.push(faker.commerce.color());
  style.push(Math.floor(Math.random() * 12));
  style.push(`https://guitar-centaur.s3.us-east-2.amazonaws.com/guitar${num}.jpeg`);
  return style;
};

const generateDataLine = (id, type) => {
  let CSVLine;
  if (type === 'item') {
    const item = [];
    item.push(makeItem(id));
    CSVLine = makeCSV(item);
  } else if (type === 'style') {
    const style = [];
    style.push(makeStyle((Math.floor((Math.random() * 109)) + 1), id));
    CSVLine = makeCSV(style);
  }
  return CSVLine;
};

const writeCSV = (size, Filename, type, callback = () => {}) => {
  const File = fs.createWriteStream(Filename);
  let i = size;
  const write = () => {
    let canWrite = true;
    do {
      i--;
      if (i === 0) {
        const CSV = generateDataLine(i, type);
        File.write(CSV, 'utf8', () => {
          File.end();
          callback(CSV);
        });
      } else {
        let CSV = generateDataLine(i, type);
        CSV += '\n';
        canWrite = File.write(CSV, 'utf8');
      }
    } while (i > 0 && canWrite);

    if (i > 0 && !canWrite) {
      if (i % 10000 === 0) { console.log('      draining write stream'); }
      File.once('drain', write);
    }
  };

  write();
};

module.exports = {
  makeCSV,
  generateDataLine,
  makeItem,
  makeStyle,
  writeCSV,
  removeCommas,
};
