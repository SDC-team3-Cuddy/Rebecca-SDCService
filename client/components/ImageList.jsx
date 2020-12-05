import React from 'react';
import styles from '../css/Images.module.css';

class ImageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: '',
    };
  }

  render() {
    return (
      <img
        onClick={this.props.click}
        onMouseOver={this.props.hover}
        className={styles.image}
        src={this.props.imageURL}
      />
    );
  }
}

export default ImageList;
