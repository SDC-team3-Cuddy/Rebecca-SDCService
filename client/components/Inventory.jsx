import React from 'react';

import styles from '../css/Inventory.module.css';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.inventorywrapper}>
        <div className={styles.inventory}>
          <span>
            {' '}
            {this.props.inventory}
            {' '}
          </span>
        </div>
      </div>
    );
  }
}

export default Inventory;
