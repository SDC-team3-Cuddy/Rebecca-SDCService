/* eslint-disable no-console */
import React from 'react';
import styles from '../css/Popup.module.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    console.log('props in popup are ', props);
  }

  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popupinner}>
          <div>
            {' '}
            <img onClick={this.props.closePopup} className={styles.close} src="https://image.flaticon.com/icons/png/512/2938/2938566.png" />
            {' '}
          </div>
          <h3 className={styles.popheader}>Free Shipping</h3>
          <aside className={styles.aside}>
            This item qualifies for free ground shipping anywhere within the contiguous United States.
          </aside>
          <button className={styles.popbutton} onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
