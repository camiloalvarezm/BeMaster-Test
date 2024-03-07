interface ButtonProps {
  title: string;
  size?: string;
  color?: string;
  onClick?: Function;
}

const Button = ({ title, size, color, onClick }: ButtonProps) => {
  const onClickButton = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <button
        className="w-full bg-blue text-white rounded-lg px-6 py-3 hover:opacity-90"
        onClick={onClickButton}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
