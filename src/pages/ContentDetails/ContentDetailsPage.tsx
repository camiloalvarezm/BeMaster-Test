import HeaderComponent from "../../components/Header/HeaderComponent";
import Button from "../../components/UI/Button/Button";

const ContentDetailsPage = () => {
  const imgBackground = {
    backgroundImage: `url(/src/assets/images/card.png)`,
  };

  const itemDetailsStyle = "bg-slate-500 px-2 rounded-md";

  return (
    <>
      <HeaderComponent />
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover b-center brightness-50"
        style={imgBackground}
      ></div>
      <section className="absolute top-0 w-full text-white px-10 lg:px-20 flex flex-col mt-40">
        <h1 className=" text-6xl lg:text-8xl">Item Name</h1>
        <div className="flex flex-row gap-4 mt-10">
          <span className={itemDetailsStyle}>7+</span>
          <span className={itemDetailsStyle}>HD</span>
          <span className={itemDetailsStyle}>CC</span>
        </div>
        <span className="mt-2 mb-10">1961 * 1h 23 min * Accion</span>
        <p className="max-w-screen-md text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas ad
          sapiente quam natus esse est magni, nisi cumque nulla iure sunt,
          mollitia illo officia eaque molestias explicabo cupiditate magnam.
        </p>
        <div className="flex flex-row w-56 md:w-96 my-10 gap-4">
          <div className="w-2/3">
            <Button title="VER AHORA"></Button>
          </div>
          <div className="w-1/3">
            <Button title="+"></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentDetailsPage;
