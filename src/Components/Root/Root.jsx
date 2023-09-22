import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Banner from "../Home/Banner/Banner";
import JobCategory from "../Home/JobCategory/JobCategory";
import Footer from "../Footer/Footer";
import FeaturedJobs from "../Home/FeaturedJobs/FeaturedJobs";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
