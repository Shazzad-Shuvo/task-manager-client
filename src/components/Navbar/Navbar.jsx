import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

    const [mobNav, setMobNav] = useState(false);
    const handleClick = () => setMobNav(!mobNav);
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
             })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard/profile">Dashboard</Link></li>
        <li><Link to="/about">About Us</Link></li>
    </>

    return (
        <div>
            {/* daisyUI */}
            <div className="navbar bg-cyan-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" md:hidden" onClick={handleClick}>
                            {!mobNav ?
                                <FaBars className="text-xl"></FaBars> :
                                <FaTimes className="text-xl"></FaTimes>}
                        </div>
                        <ul tabIndex={0} className={!mobNav ? "hidden" : "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"}>
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl ml-6">SCC Technovision Inc.</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex flex-col md:flex-row items-center">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                                        <div className="w-8 md:w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <p className="text-sm md:text-base mr-4 dark:text-slate-200">{user.displayName}</p>
                                </div>
                                <button onClick={handleLogOut} className="btn bg-gradient-to-r from-cyan-300/80 to-blue-500/80 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-700/80 text-white">Log Out</button>
                            </> :
                            <Link to='/login'>
                                <button className="btn bg-gradient-to-r from-cyan-300/80 to-blue-500/80 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-700/80 text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;