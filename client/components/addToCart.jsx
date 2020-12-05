/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Inventory from './Inventory.jsx';
import Button from './Button.jsx';
import Message from './Message.jsx';
import Style from './Style.jsx';
import Price from './Price.jsx';
import Questions from './Questions.jsx';
import Financing from './Financing.jsx';
import Images from './Images.jsx';
import AddToList from './AddToList.jsx';
import Description from './Description.jsx';
import Lessons from './Lessons.jsx';
import styles from '../css/addToCart.module.css';
import LessonPlans from './LessonPlans.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      style: 'Black',
      message: 'In Stock',
      status: 'Add to Cart',
      inventory: 'Most orders placed before noon ET ship same day (except weekends and holidays).',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    axios.get('/api/styles')
      .then((response) => {
        const hover = e.target.src.toString();
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].image_url === hover) {
            var newstyle = response.data[i].style;
          }
        }
        this.setState({
          style: newstyle,
        });
      })
      .catch((err) => {
        console.log('we have an error from your hover method ', err);
      });
    e.persist();
  }

  handleFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleClick(e) {
    axios.get('/api/styles')
      .then((response) => {
        const clicked = e.target.src.toString();
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].image_url === clicked) {
            var newquantity = response.data[i].quantity;
          }
        }
        if (newquantity === 0) {
          this.setState({
            status: 'Reserve Now',
            message: 'Order now!',
            inventory: 'This item is backordered but is available to reserve now. You will not be charged until the item ships. Email me when this is in stock.',
          });
        } else {
          this.setState({
            status: 'Add to Cart',
            message: 'In Stock',
            inventory: 'Most orders placed before noon ET ship same day (except weekends and holidays).',
          });
        }
      })
      .catch((err) => {
        console.log('could not retrieve style');
      });
    e.persist();
  }

  componentDidMount() {
    axios.get('/api/styles')
      .then((response) => {
        console.log('response is ', response.data);
        this.setState({
          images: response.data,
        });
      })
      .catch((err) => {
        console.log('received an error from get request in ATC', err);
      });
  }

  render() {
    return (
      <>
        <div className={styles.biggrid}>
          <Description />
          <div className={styles.description}>{this.props.description}</div>
          <Style style={this.handleFirst(this.state.style)} />
          <Images images={this.state.images} hover={this.handleHover} click={this.handleClick} />
          <Lessons />
        </div>
        <div className={styles.container}>
          <div className={styles.addtocart}>
            <AddToList />
            <Price price={this.props.prices} />
            <Financing />
            <Message themessage={this.state.message} />
            <Button other={this.state.message} button={this.state.status} />
            <Inventory inventory={this.state.inventory} />
            <div className={styles.qs}>
              <Questions questions={this.props.questions} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddToCart;
