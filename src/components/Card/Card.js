import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleCLickFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const handleCLickDelete = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <div>
      <li className={styles.card}>
        {props.title}
        <div className={styles.buttons}>
          <button onClick={handleCLickFavorite}>
            <span
              className={clsx(
                'fa fa-star-o',
                props.isFavorite && styles.isFavorite
              )}
            ></span>
          </button>
          <span onClick={handleCLickDelete} className='fa fa-trash'></span>
        </div>
      </li>
    </div>
  );
};

export default Card;
