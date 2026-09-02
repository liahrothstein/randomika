interface CardProps {
  image: string;
}

export function Card({ image }: CardProps) {
  return (
    <div>
      <img src={image} />
    </div>
  );
}
