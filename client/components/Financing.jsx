import React from 'react';
import styles from '../css/Financing.module.css';

class Financing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.financewrapper}>
        <div className={styles.financing}>
          <img className={styles.giftcard} src="https://www.photowork.net/wp-content/uploads/2017/01/Giftcard.jpg" />
          Special 6-month financing:
          {' '}
          <b>
            {' '}
            <a href=""> $8 back in rewards. </a>
          </b>
          Valid through 12/31/2020.
          {' '}
          <b>
            <a href=""> Get Details </a>
            {' '}
          </b>
          {' '}
          About Special Financing Offers
        </div>
      </div>
    );
  }
}

export default Financing;
