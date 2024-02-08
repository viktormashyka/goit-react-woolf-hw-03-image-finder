import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

// import * as basicLightbox from 'basiclightbox';

export class ImageGalleryItem extends Component {
  // showModal(url)=>{ }

  render() {
    const { image } = this.props;
    return (
      <li className={css.ImageGalleryItem} key={image.id}>
        <img
          className={css.ImageGalleryItemImage}
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
    );
  }
}

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
