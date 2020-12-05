import React from 'react';

import styles from '../css/Message.module.css';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.messagewrapper}>
        <span className={styles.message}>
          {this.props.themessage}
        </span>
      </div>
    );
  }
}

export default Message;
