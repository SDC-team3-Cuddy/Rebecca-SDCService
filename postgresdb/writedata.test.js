/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const fs = require('fs');
const path = require('path');
const postgres = require('postgresql');
const write = require('./writedata');

chai.use(sinonChai);
const { expect } = chai;

describe('writedata.js', () => {
  context('copyToDB', () => {
    it('should be a function', () => {
      expect(write.copyToDB).to.be.a('function');
    });
  });
});
