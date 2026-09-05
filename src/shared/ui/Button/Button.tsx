interface ButtonProps {
  text?: string;
  image?: string;
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

export function Button({ text, image, onClick, disabled, className }: ButtonProps) {
  return (
    <button className={className} onClick={() => onClick()} disabled={disabled}>
      {text}
      <img src={image} />
    </button>
  );
}
