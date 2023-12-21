import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [mobNav, setMobNav] = useState(false);
    const handleClick = () => setMobNav(!mobNav);

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">Create Task</Link></li>
    </>

    return (
        <div>
            {/* daisyUI */}
            <div className="navbar bg-red-300">
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
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;