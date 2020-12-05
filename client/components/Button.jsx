import React from 'react';

import styles from '../css/Button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          className={styles.subbutton}
          type="submit"
          value={this.props.button}
        />
        <input
          className={styles.subnumber}
          type="number"
          min="1"
          max="100"
          placeholder="1"
        />
      </form>
    );
  }
}

export default Button;
