/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
const React = require('react');
const request = require('supertest');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
// const sinon = require('sinon');
const app = require('./app');
const Style = require('../client/components/Style.jsx').default;
const Images = require('../client/components/Images.jsx').default;
const AddToCart = require('../client/components/addToCart.jsx').default;
const Message = require('../client/components/Message.jsx').default;

const tests = {
  user: 'Michael Bolton',
  style: 'Black',
  message: 'In Stock',
};

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/api/values')
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  test('It should not have a POST method', (done) => {
    request(app)
      .post('/api/values')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  test('It should have a GET method for styles', (done) => {
    request(app)
      .get('/api/styles')
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});

describe('Rendering components', () => {
  it('should render the Style component', () => {
    enzyme.shallow(<Style />);
  });

  it('should render the Images component', () => {
    enzyme.shallow(<Images />);
  });

  it('should render the Add to Cart component', () => {
    enzyme.shallow(<AddToCart />);
  });
});

describe('Components have appropriate initial state(s)', () => {
  it('have the initial style set to Black', () => {
    const wrapper = enzyme.shallow(<Style style={tests.style} />);
    const styler = 'Black';
    expect(wrapper.contains(styler)).toEqual(true);
  });

  it('should have a message status of In Stock', () => {
    const wrapper = enzyme.shallow(<Message themessage={tests.message} />);
    const test = 'In Stock';
    expect(wrapper.contains(test)).toEqual(true);
  });

  it('renders div elements when passed in', () => {
    const wrapper = enzyme.shallow(<Style />);
    expect(wrapper.find('div').toBe(true));
  });
});
