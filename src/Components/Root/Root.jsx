import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
