import React from "react";
import Home from "./views/home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

const Layout = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default injectContext(Layout);
