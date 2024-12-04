import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecettePage from "../src/pages/recette/RecettePage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      },
      {
        path: "/recipe",
        element: <RecettePage />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      },
      {
        path: "/contact/:id",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
