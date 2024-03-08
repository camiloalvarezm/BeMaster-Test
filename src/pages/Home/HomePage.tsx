import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Card from "../../components/UI/Card/Card";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { updateStream } from "../../store/slices/stream/streamSlice";
import apiData from "../../api/streamData.json";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateStream(apiData.streamData));
  });

  const categories = useSelector(
    (state: RootState) => state.api.streamData.categories
  );

  return (
    <>
      <HeaderComponent />
      <div className="p-10 bg-gradient-to-b from-black to-dark-blue min-h-screen">
        <h1 className="text-center text-white text-xl lg:text-4xl mb-10">
          Categorías
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {categories && categories.map((category: any, index: number) => (
            <Link to="/items-category" key={index}>
              <Card img={category.imagePath} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
