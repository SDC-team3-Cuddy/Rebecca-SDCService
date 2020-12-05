const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db'); // including this file makes use of MySQL
// const db = require('../mongodb'); // including this file makes use of MongoDB
// const db = require('../postgresdb'); // including this file makes use of PostgreSQL

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Read-All
app.get('/api/values', (req, res) => {
  db.getValues((err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

app.get('/api/styles', (req, res) => {
  db.getStyles((err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

// Read-One -- itemid needs to be a number associated with the desired record
app.get('/api/values/:itemid', (req, res) => {
  const callId = req.body.itemid;
  db.readItem(callId, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

app.get('/api/styles/:styleid', (req, res) => {
  const callId = req.body.itemid;
  db.readStyle(callId, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

// Create -- takes a json of a single object with a key-value for each db column
app.post('/api/styles/:stylejson', (req, res) => {
  const styleJSON = req.body.stylejson;
  const newStyle = JSON.parse(styleJSON);
  db.addStyle(newStyle, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

app.post('/api/values/:itemjson', (req, res) => {
  const itemJSON = req.body.stylejson;
  const newItem = JSON.parse(itemJSON);
  db.addItem(newItem, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

// Update
app.put('/api/values/:itemjson', (req, res) => {
  const itemJSON = req.body.stylejson;
  const putItem = JSON.parse(itemJSON);
  db.updateItem(putItem, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200).send(response);
    }
  });
});

app.put('/api/styles/:stylejson', (req, res) => {
  const styleJSON = req.body.stylejson;
  const putStyle = JSON.parse(styleJSON);
  db.updateStyle(putStyle, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200).send(response);
    }
  });
});

// Delete
app.delete('/api/values/:itemid', (req, res) => {
  const callId = req.body.itemid;
  db.deleteItem(callId, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

app.delete('/api/styles/:styleid', (req, res) => {
  const callId = req.body.styleid;
  db.deleteStyle(callId, (err, response) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201).send(response);
    }
  });
});

module.exports = app;
