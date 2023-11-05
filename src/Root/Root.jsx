import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
const Root = () => {
  return (
    <div className='2xl:container mx-auto px-4'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;