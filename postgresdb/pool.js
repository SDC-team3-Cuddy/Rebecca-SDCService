/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
const pg = require('pg');

class Pool {
  constructor() {
    let _pool = null;
    this.connect = this.connect.bind(this);
  }

  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query(`SELECT 1+1;`);
  }
}

module.exports = {
  Pool,
};
