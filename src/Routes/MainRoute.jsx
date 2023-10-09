import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Favorites from "../Pages/Favorites";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoutes>
            <Favorites />
          </PrivateRoutes>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
