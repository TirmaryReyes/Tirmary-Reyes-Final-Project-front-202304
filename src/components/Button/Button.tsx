interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactElement;
  accesibility?: string;
}

const Button = ({
  text,
  onClick,
  className,
  accesibility,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button aria-label={accesibility} onClick={onClick} className={className}>
      {text}
      {children}
    </button>
  );
};

export default Button;
