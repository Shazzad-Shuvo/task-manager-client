import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Board from "../components/Board/Board";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="flex flex-col justify-between pb-16 w-36 md:w-64 min-h-screen bg-gradient-to-b from-cyan-300/80 to-blue-500/80">
                <ul className="menu p-4">
                    <div className="flex justify-center">
                        <img className="w-48" src="https://i.ibb.co/tQV1SMG/Skill-sphere-removebg-preview.png" alt="" />
                    </div>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>
                {/* <ul className="menu p-4">
                    <li onClick={handleLogOut}><Link><MdLogout className="text-xl"></MdLogout> Log Out</Link></li>
                </ul> */}
            </div>

            {/* dashboard content */}
            <div className="flex-1 md:p-8">
                {/* <Outlet></Outlet> */}
                <Board/>
            </div>
        </div>
    );
};

export default Dashboard;