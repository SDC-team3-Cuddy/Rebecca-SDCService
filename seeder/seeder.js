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

const makeItem = () => {
  const item = [];
  const description = removeCommas(faker.commerce.productDescription());
  item.push(description);
  item.push(faker.random.float());
  return item;
};

const makeStyle = (num) => {
  const style = [];
  style.push(faker.commerce.color());
  style.push(faker.random.number(1, 10));
  style.push(`https://guitarimages.s3-us-west-2.amazonaws.com/Guitar_Image${num}.jpg`);
  return style;
};

const generateDataLine = (type) => {
  let CSVLine;
  if (type === 'item') {
    const item = [];
    item.push(makeItem());
    CSVLine = makeCSV(item);
  } else if (type === 'style') {
    const style = [];
    style.push(makeStyle((Math.random() * 99) + 1));
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
        const CSV = generateDataLine(type);
        File.write(CSV, 'utf8', () => {
          File.end();
          callback(CSV);
        });
      } else {
        let CSV = generateDataLine(type);
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
