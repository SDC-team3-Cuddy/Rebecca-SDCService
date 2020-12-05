import React from 'react';
import styles from '../css/Price.module.css';

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.pricewrapper}>
        <div className={styles.productprice}>
          {' '}
          $
          {this.props.price}
        </div>
        <div className={styles.freeshipping}> +Free Shipping </div>
      </div>
    );
  }
}

export default Price;
