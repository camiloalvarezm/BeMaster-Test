import Card from "../../components/UI/Card/Card";

const ContentCategoryPage = () => {
  const imgBackground = {
    backgroundImage: `url(/src/assets/images/card.png)`,
  };
  return (
    <>
      <section className="bg-gradient-to-b from-black to-dark-blue">
        <div
          className="h-96 bg-cover b-center mb-10 mx-10 rounded-lg shadow-2xl shadow-midnight-blue"
          style={imgBackground}
        ></div>
        <h2 className="text-white px-10 text-xl">Películas</h2>
        <div className="flex flex-nowrap gap-6 p-10">
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
        </div>
        <h2 className="text-white px-10 text-xl">Originales</h2>
        <div className="flex flex-nowrap gap-6 p-10">
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
        </div>
        <h2 className="text-white px-10 text-xl">Cortos</h2>
        <div className="flex flex-nowrap gap-6 p-10">
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
          <Card img="card.png" />
        </div>
      </section>
    </>
  );
};

export default ContentCategoryPage;
