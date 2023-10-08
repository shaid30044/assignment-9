import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Gallery from "../Pages/Gallery";

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
        path: "/gallery",
        element: <Gallery />,
        loader: () => fetch("/data.json"),
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
