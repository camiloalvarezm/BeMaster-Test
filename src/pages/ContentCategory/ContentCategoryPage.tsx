import { useSelector } from "react-redux";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Card from "../../components/UI/Card/Card";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";

const ContentCategoryPage = () => {
  const data = useSelector((state: RootState) => state.api.streamData);

  const imgBackground = {
    backgroundImage: `url(/src/assets/images/banner.webp)`,
  };

  return (
    <>
      <HeaderComponent />
      <section className="bg-gradient-to-b from-black to-dark-blue p-10">
        <div
          className="h-96 bg-cover b-center mb-10 mx-10 rounded-lg shadow-2xl shadow-midnight-blue"
          style={imgBackground}
        ></div>
        <h2 className="text-white px-10 text-xl">Películas</h2>
        <div className="flex flex-nowrap gap-6 p-10">
          {data.movies &&
            data.movies.map((movie: any, index: number) => (
              <Link to="/item-details/454564" key={index}>
                <Card img={movie.imagePath} />
              </Link>
            ))}
        </div>
        <h2 className="text-white px-10 text-xl">Originales</h2>
        <div className="flex flex-nowrap gap-6 p-10">
        {data.originals &&
            data.originals.map((movie: any, index: number) => (
              <Link to="/item-details/454564" key={index}>
                <Card img={movie.imagePath} />
              </Link>
            ))}
        </div>
        <h2 className="text-white px-10 text-xl">Cortos</h2>
        <div className="flex flex-nowrap gap-6 p-10">
        {data.shorts &&
            data.shorts.map((movie: any, index: number) => (
              <Link to="/item-details/454564" key={index}>
                <Card img={movie.imagePath} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default ContentCategoryPage;
