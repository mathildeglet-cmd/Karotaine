import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { useEffect } from "react";
import "./App.css";
import icon from "./assets/images/icon.png";

function App() {
  const location = useLocation();

  const knownPaths: string[] = [
    "/",
    "/recipe",
    "/contact",
    "/quiz",
    "/conseil",
  ];

  useEffect(() => {
    document.body.className = "body-default";

    if (location.pathname === "/") {
      document.body.classList.add("body-home");
    } else if (!knownPaths.some((path) => location.pathname.startsWith(path))) {
      document.body.classList.add("body-error");
    }
  }, [location]);

  return (
    <>
      {" "}
      <a href="/">
        <div className="logo">
          <img src={icon} alt="Carrot is the truth" />
        </div>
      </a>
      <NavBar />
      <div className="pages">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
