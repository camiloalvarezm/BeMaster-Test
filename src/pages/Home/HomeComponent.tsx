import Card from "../../components/UI/Card/Card";
import movie from "../../assets/images/card.png";

const HomeComponent = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center p-10 bg-gradient-to-b from-black to-dark-blue">
      <Card img={movie} />
      <Card img={movie} />
      <Card img={movie} />
      <Card img={movie} />
      <Card img={movie} />
    </div>
  );
};

export default HomeComponent;
