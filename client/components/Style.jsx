import React from 'react';

import styles from '../css/Style.module.css';

class Style extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.stylewrapper}>
        <div className={styles.choosestyle}>
          Choose Style:
        </div>
        <div className={styles.styletype}>
          {this.props.style}
        </div>
      </div>
    );
  }
}

export default Style;
