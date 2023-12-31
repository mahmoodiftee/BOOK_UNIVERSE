import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
const Root = () => {
  return (
    <div className='w-full mx-auto'>
      <NavBar></NavBar>
      <div className="2xl:container mx-auto px-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;