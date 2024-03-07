import Card from "../../components/UI/Card/Card";

const HomeComponent = () => {
  return (
    <>
      <div className="flex gap-6 flex-wrap justify-center p-10 bg-gradient-to-b from-black to-dark-blue">
        <Card img="card.png" />
        <Card img="card.png" />
        <Card img="card.png" />
        <Card img="card.png" />
        <Card img="card.png" />
      </div>
    </>
  );
};

export default HomeComponent;
