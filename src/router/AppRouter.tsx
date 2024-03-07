import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContentCategoryPage from "../pages/ContentCategory/ContentCategoryPage";
import LoginPage from "../pages/Auth/Login/LoginPage";
import ContentDetailsPage from "../pages/ContentDetails/ContentDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/post",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/items-category",
    element: <ContentCategoryPage />,
    children: [
      {
        path: "detail-item",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
