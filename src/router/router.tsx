import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import HomeComponent from "../pages/home/home.component";
import DetailComponent from "../pages/detail/detail.component";

const router = createBrowserRouter([
  {
    path: Routes.default,
    element: <HomeComponent />,
  },
  {
    path: Routes.detail,
    element: <DetailComponent />,
  },
]);

export default router;
