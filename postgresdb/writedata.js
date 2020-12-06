/* eslint-disable no-console */
const copyToDB = (connection, itemsPath = undefined, stylesPath = undefined) => {
  if (itemsPath) {
    const sql = `COPY items(description, price) FROM '${itemsPath}' DELIMITER ',';`;
    connection.query(sql)
      .then(() => {
        console.log('      Items Table Updated');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (stylesPath) {
    const sql2 = `COPY styles(style, quantity, image_url) FROM '${stylesPath}' DELIMITER ',';`;
    connection.query(sql2)
      .then(() => {
        console.log('      Styles Table Updated');
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

module.exports = {
  copyToDB,
};
