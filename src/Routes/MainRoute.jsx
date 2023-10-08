import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Favorites from "../Pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
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
    ],
  },
]);

export default router;
