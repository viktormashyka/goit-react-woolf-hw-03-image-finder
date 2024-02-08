import css from './Modal.module.css';

export const Modal = () => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

// TODO: add lib

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
