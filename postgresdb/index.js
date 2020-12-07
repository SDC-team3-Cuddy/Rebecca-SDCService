/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* INITIALIZATION */
const { Pool } = require('./pool');
const { Password } = require('../rootConfig.js');

const productsConfig = {
  host: 'localhost',
  port: 5432,
  database: 'products',
  user: 'becca',
  password: Password,
};

const connect = new Pool();
connect.connect(productsConfig)
  .then(() => {
    console.log('connected to postgres database "products"');
  })
  .catch((err) => {
    console.error(err);
  });
const connection = connect._pool;

/* API-CALL DATABASE QUERIES */
// Read-All (GET)
const getValues = (callback) => {
  const sql = 'SELECT * FROM items';
  connection.query(sql, (err, response) => {
    console.log('querying database...');
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const getStyles = (callback) => {
  const sql = 'SELECT * FROM styles';
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

// Read-One (GET) -- takes a num representing the id number of a row in the table
const readItem = (callId, callback) => {
  const sql = `SELECT * FROM items WHERE id=${callId}`;
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const readStyle = (callId, callback) => {
  const sql = `SELECT * FROM styles WHERE id=${callId}`;
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

// Create (POST) -- takes an object, translates it to SQL syntax, Inserts into db
const addItem = (itemObj, callback) => {
  const sql = `INSERT INTO items (description, price) VALUES (${itemObj.description}, ${itemObj.price})`;
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const addStyle = (styleObj, callback) => {
  const sql = `INSERT INTO styles (style, image_url, quantity) VALUES (${styleObj.style}, ${styleObj.image_url}, ${styleObj.quantity})`;
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

// Update (PUT) -- takes an object, checks its key names, updates those columns @ id
const updateItem = (itemObj, callback) => {
  let sql;

  if (itemObj.id === undefined || itemObj.id === null || itemObj.id.isNan()) {
    callback('Error: id undefined');
  }

  if (itemObj.description !== undefined && itemObj.price !== undefined) {
    sql = `UPDATE items SET description='${itemObj.description}', price=${itemObj.price} WHERE id=${itemObj.id}`;
  } else if (itemObj.description !== undefined) {
    sql = `UPDATE items SET description='${itemObj.description}' WHERE id=${itemObj.id}`;
  } else if (itemObj.price !== undefined) {
    sql = `UPDATE items SET price=${itemObj.price} WHERE id=${itemObj.id}`;
  }

  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const updateStyle = (styleObj, callback) => {
  let sql;

  if (styleObj.id === undefined || styleObj.id === null || styleObj.id.isNan()) {
    callback('Error: id undefined');
  }

  // check if all 3 cols need to be updated
  if (styleObj.style !== undefined && styleObj.image_url !== undefined
    && styleObj.quantity !== undefined) {
    sql = `UPDATE styles SET style='${styleObj.style}', image_url='${styleObj.image_url}', quantity=${styleObj.quantity} WHERE id=${styleObj.id}`;
  } else if (styleObj.style !== undefined) {
    // if not all 3, but the style needs updating, check if a second col needs updating
    if (styleObj.image_url !== undefined) {
      sql = `UPDATE styles SET style='${styleObj.style}', image_url='${styleObj.image_url}' WHERE id=${styleObj.id}`;
    } else if (styleObj.quantity !== undefined) {
      sql = `UPDATE styles SET style='${styleObj.style}', quantity=${styleObj.quantity} WHERE id=${styleObj.id}`;
    } else {
      sql = `UPDATE styles SET style='${styleObj.style}' WHERE id=${styleObj.id}`;
    }
  } else if (styleObj.image_url !== undefined) {
    // if style does not need updating, check if one or both of the other cols need it
    if (styleObj.quantity !== undefined) {
      sql = `UPDATE styles SET image_url='${styleObj.image_url}', quantity=${styleObj.quantity} WHERE id=${styleObj.id}`;
    } else {
      sql = `UPDATE styles SET image_url='${styleObj.image_url}' WHERE id=${styleObj.id}`;
    }
  } else if (styleObj.quantity !== undefined) {
    sql = `UPDATE styles SET quantity=${styleObj.quantity} WHERE id=${styleObj.id}`;
  }

  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

// Delete (DELETE)
const deleteItem = (callId, callback) => {
  const sql = `DELETE FROM items WHERE id=${callId}`;
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const deleteStyle = (callId, callback) => {
  const sql = `DELETE FROM styles WHERE id=${callId}`;
  connection.query(sql, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

module.exports = {
  getValues,
  getStyles,
  readItem,
  readStyle,
  addItem,
  addStyle,
  updateItem,
  updateStyle,
  deleteItem,
  deleteStyle,
};
