import React from 'react';
import styles from '../css/AddToList.module.css';

class AddToList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.addtolist}>
        <a href=""> Add to List </a>
      </div>
    );
  }
}

export default AddToList;
