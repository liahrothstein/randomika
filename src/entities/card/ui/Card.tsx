import { handleClick } from '../model/card';
import styles from './Card.module.scss';

interface CardProps {
  image: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function Card({ image, isActive, onClick }: CardProps) {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={() => handleClick(isActive, onClick)}
      style={{ cursor: isActive ? 'pointer' : 'default' }}
    >
      <img src={image} alt="Карточка" className={styles.image} />
    </div>
  );
}
