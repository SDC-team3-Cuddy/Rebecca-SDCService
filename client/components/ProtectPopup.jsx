/* eslint-disable no-console */
import React from 'react';
import styles from '../css/ProtectPopup.module.css';

class ProtectPopup extends React.Component {
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
          <h3 className={styles.popheader}> This Qualifies for Pro Coverage   </h3>
          <aside className={styles.aside}>
            <li className={styles.dot}>
              Covers accidental drops, spills or cracks
            </li>
            <li className={styles.dot}>
              No deductibles or additional cost
            </li>
            Pro Coverage will be offered when you add your gear to cart.
          </aside>
          <button className={styles.popbutton} onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default ProtectPopup;
