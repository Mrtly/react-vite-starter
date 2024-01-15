import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Example from "./pages/Example.tsx";
import Layout from "./Layout.tsx";

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

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />{" "}
    </Layout>
  );
};

export default App;
