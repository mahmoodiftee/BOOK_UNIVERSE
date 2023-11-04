import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from '../../assets/logobook.png';
const NavBar = () => {
    const links = <>
        <li> <NavLink to={"/"}> Home </NavLink> </li>
        <li> <NavLink to={"/allBooks"}> All Books</NavLink> </li>
        <li> <NavLink to={"/addBooks"}> Add Book</NavLink> </li>
        <li> <NavLink to={"/borrowedBooks"}> Borrowed Books</NavLink></li>
    </>
    const { user, LogOut } = useContext(AuthContext)
    const handleSignOut = () => {
        LogOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="w-24" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown  dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/sR6WQ6Z/pic.png" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[250px]">
                                <li>
                                    <button className="btn btn-sm lowercase btn-ghost">{user?.email}</button>

                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="btn btn-sm capitalize btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;