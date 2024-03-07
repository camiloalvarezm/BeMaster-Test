interface CardProps {
  img: string;
}

const Card = ({ img }: CardProps) => {
  const imgBackground = {
    backgroundImage: `url(${img})`,
  };
  return (
    <>
      <div
        className="w-60 h-36 rounded-lg shadow-2xl shadow-midnight-blue cursor-pointer transition-transform transform hover:scale-110 bg-cover b-center hover:border hover:border-white hover:z-30"
        style={imgBackground}
      ></div>
    </>
  );
};

export default Card;
