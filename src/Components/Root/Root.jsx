import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Banner from "../Home/Banner/Banner";
import JobCategory from "../Home/JobCategory/JobCategory";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
