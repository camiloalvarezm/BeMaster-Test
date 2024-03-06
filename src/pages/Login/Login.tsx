import Button from "../../components/UI/Button/Button";
import TextField from "../../components/UI/TextField/TextField";
import streamLogo from "../../assets/logo.svg";

const Login = () => {
  return (
    <>
      <div className="border h-screen flex flex-col gap-6 bg-gradient-to-b from-dark-blue to-midnight-blue">
        <img
          src={streamLogo}
          alt="stream-logo"
          className="w-48 mx-auto mt-11"
        />
        <form
          action="post"
          className="flex flex-col gap-6 w-80 mx-auto bg-white p-8 rounded-lg lg:w-2/5 lg:mt-5 lg:p-12"
        >
          <p className="text-center text-sm">
            Ingresa en tu cuenta, si no tienes una, se te pedirá que crees una.
          </p>
          <TextField type="email" title="Email" required />
          <TextField type="password" title="Contraseña" required />
          <Button title="Iniciar sesión" />
        </form>
      </div>
    </>
  );
};

export default Login;
