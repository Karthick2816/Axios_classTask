import CreateBlog from "../CreateBlog";
import Dashboard from "../Dashboard";
import Home from "../Home";
import Edit from "../Edit";
import { Navigate } from "react-router-dom";
import TopBar from "../TopBar";
const AppRoutes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/create",
    exact: true,
    element: <CreateBlog />,
  },
  {
    path: "/edit/:id",
    exact: true,
    element: <Edit />,
  },
  {
    path: "/*",
    exact: false,
    element: <Navigate to="/" />,
  },
];
export default AppRoutes;
