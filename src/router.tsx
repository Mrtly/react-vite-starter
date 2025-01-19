import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Example from "./pages/Example.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    id: "home",
    errorElement: <NotFound />,
  },
  {
    path: "/example",
    element: <Example />,
    id: "example",
  },
] satisfies RouteObject[]);

export default router;
