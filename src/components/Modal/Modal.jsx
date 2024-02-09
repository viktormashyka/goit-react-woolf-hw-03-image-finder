import css from './Modal.module.css';
import emptyThumbnail from '../../images/empty-thumbnail.png';

export const Modal = ({ largeImageURL, tags, toggleModal }) => {
  return (
    <div className={css.Overlay} onClick={toggleModal}>
      <div className={css.Modal}>
        <img src={largeImageURL ? largeImageURL : emptyThumbnail} alt={tags} />
      </div>
    </div>
  );
};
