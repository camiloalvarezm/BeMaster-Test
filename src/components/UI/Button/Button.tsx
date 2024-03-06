interface ButtonProps {
  title: string;
  size?: string;
  color?: string;
}

const Button = ({ title, size, color }: ButtonProps) => {
  return (
    <>
      <button className="w-full bg-blue text-white rounded-lg px-6 py-3">
        {title}
      </button>
    </>
  );
};

export default Button;
