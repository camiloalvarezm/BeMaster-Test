import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContentCategoryPage from "../pages/ContentCategory/ContentCategoryPage";
import LoginPage from "../pages/Auth/Login/LoginPage";
import ContentDetailsPage from "../pages/ContentDetails/ContentDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <ContentCategoryPage />,
    children: [
      {
        path: "details",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
