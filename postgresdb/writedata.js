/* eslint-disable no-console */

const copyToDB = (connection, itemsPath = undefined, stylesPath = undefined, callback) => {
  if (itemsPath) {
    const sql = `\\copy products.items(id, description, price) FROM '${itemsPath}' DELIMITER ',';`;
    console.log(sql);
    console.log(typeof(sql));
    console.log(itemsPath);
    connection.query(sql)
      .then(() => {
        console.log('      Items Table Updated');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (stylesPath) {
    const sql2 = `\\copy products.styles(id, style, quantity, image_url) FROM '${stylesPath}' DELIMITER ',';`;
    connection.query(sql2)
      .then(() => {
        console.log('      Styles Table Updated');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  callback();
};

module.exports = {
  copyToDB,
};
