import React from 'react';

import styles from '../css/Questions.module.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.qwrapper}>
        <div className={styles.questions}>
          {' '}
          Have Questions?
          <img className={styles.phone} src="https://www.clker.com//cliparts/R/i/G/W/R/P/black-phone-hi.png" />
          {' '}
          866-498-7882
        </div>
        <div className={styles.experts}>
          Call our experts for product info and phone-only specials.
        </div>
      </div>
    );
  }
}

export default Questions;
