interface ButtonProps {
  title: string;
  size?: string;
  color?: string;
  onClick: Function;
}

const Button = ({ title, size, color, onClick }: ButtonProps) => {
  const onClickButton = () => {
    onClick();
  };

  return (
    <>
      <button
        className="w-full bg-blue text-white rounded-lg px-6 py-3"
        onClick={onClickButton}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
