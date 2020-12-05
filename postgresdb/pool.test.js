/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
const pg = require('pg');
const { Pool } = require('./pool');
const { Password } = require('../rootConfig.js');

const { expect } = chai;

const validConfig = {
  host: 'localhost',
  port: 5432,
  database: 'testproducts',
  user: 'becca',
  password: Password,
};

describe('pool.js', () => {
  context('poolConstructor', () => {
    it('should initialize _pool to null', () => {
      const testPool = new Pool();
      expect(testPool._pool).to.not.exist;
    });
  });

  context('Pool.connect', () => {
    it('should set _pool to a new instance of pg.Pool', () => {
      const testPool = new Pool();
      testPool.connect(validConfig);
      expect(testPool._pool instanceof pg.Pool).to.be.true;
    });

    it('should return a promise from a valid connection', () => {
      const testPool = new Pool();
      testPool.connect(validConfig).then(() => {
        expect(true).to.be.true;
      }).catch((err) => {
        console.error(err);
        expect(err).to.not.exist;
      });
    });
  });
});
