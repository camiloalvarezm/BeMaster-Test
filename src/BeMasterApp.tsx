import LoginComponent from "./pages/Login/LoginComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import HomeComponent from "./pages/Home/HomeComponent";

const App = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
      <LoginComponent></LoginComponent>
    </>
  );
};

export default App;
