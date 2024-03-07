import HeaderComponent from "../../components/Header/HeaderComponent";
import Card from "../../components/UI/Card/Card";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <div className="p-10 bg-gradient-to-b from-black to-dark-blue min-h-screen">
        <h1 className="text-center text-white text-xl lg:text-4xl mb-10">
          Categorías
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/items-category">
            <Card img="card.png" />
          </Link>
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
