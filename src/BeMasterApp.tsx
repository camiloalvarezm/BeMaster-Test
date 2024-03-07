import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";

const BeMasterApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default BeMasterApp;
