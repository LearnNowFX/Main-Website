import Home from "../pages/home/home";
import Blog from "../pages/blog/blog";
import Contact from "../pages/contact/contact";
import Products from "../pages/products/products";
import Tutorials from "../pages/tutorials/tutorials";
import { IRoute } from "../interfaces/route.interface";

export const ROUTES: IRoute[] = [
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/home/*",
    element: <Home />,
  },
  {
    path: "/products/*",
    element: <Products />,
  },
  {
    path: "/tutorials/*",
    element: <Tutorials />,
  },
  {
    path: "/blog/*",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
