interface ButtonProps {
  text?: string;
  image?: string;
}

export function Button({ text, image }: ButtonProps) {
  return (
    <button>
      {text}
      <img src={image} />
    </button>
  );
}
