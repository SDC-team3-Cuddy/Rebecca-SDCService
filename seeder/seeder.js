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

const generateDataChunk = (size) => {
  const chunk = { items: [], styles: [] };
  for (let i = 0; i < size; i++) {
    chunk.items.push(makeItem());
    chunk.styles.push(makeStyle((Math.random() * 99) + 1));
  }
  return chunk;
};

const writeCSV = (CSV, Filename) => {
  const File = fs.createWriteStream(Filename);
  File.write(CSV, 'utf8');
  File.end();
};

module.exports = {
  makeCSV,
  generateDataChunk,
  makeItem,
  makeStyle,
  writeCSV,
  removeCommas,
};
