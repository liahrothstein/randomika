interface ButtonProps {
  text?: string;
  image?: string;
  onClick: () => void;
  disabled: boolean;
}

export function Button({ text, image, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={() => onClick()} disabled={disabled}>
      {text}
      <img src={image} />
    </button>
  );
}
