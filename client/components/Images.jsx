import React from 'react';
import ImageList from './ImageList.jsx';
import styles from '../css/Images.module.css';

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.images.slice(0, 4).map((image) => (
          <ImageList key={image.id} click={this.props.click} imageURL={image.image_url} style={image.style} hover={this.props.hover} />
        ))}
      </div>
    );
  }
}

export default Images;
