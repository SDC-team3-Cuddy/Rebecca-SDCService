import React from 'react';
import styles from '../css/Description.module.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.descriptionwrapper}>
        <div className={styles.productdescription}> Product Description: </div>
        <div className={styles.description}>
          {' '}
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Description;
