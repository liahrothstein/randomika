import styles from './Card.module.scss';

interface CardProps {
  image: string;
}

export function Card({ image }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt="Карточка" className={styles.image} />
    </div>
  );
}
