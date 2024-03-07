const ContentDetailsComponent = () => {
  const imgBackground = {
    backgroundImage: `url(/src/assets/images/card.png)`,
  };
  return (
    <>
      <section
        className="h-96 bg-cover b-center mb-10 mx-10 rounded-lg shadow-2xl shadow-midnight-blue"
        style={imgBackground}
      ></section>
    </>
  );
};

export default ContentDetailsComponent;
