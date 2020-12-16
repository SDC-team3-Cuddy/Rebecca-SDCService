/* eslint-disable no-console */
import React from 'react';
import styles from '../css/InternationalPopup.module.css';

class InternationalPopup extends React.Component {
  constructor(props) {
    super(props);

    console.log('props in international popup are ', props);
  }

  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popupinner}>
          <div className={styles.popdiv}>
            {' '}
            <img onClick={this.props.closePopup} className={styles.close} src="https://image.flaticon.com/icons/png/512/2938/2938566.png" />
            {' '}
          </div>
          <h3 className={styles.popheader}>International Shipping</h3>
          <aside className={styles.aside}>
            This item can be shipped globally. We offer international shipping to over 100 countries worldwide.
          </aside>
          <button className={styles.popbutton} onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default InternationalPopup;
