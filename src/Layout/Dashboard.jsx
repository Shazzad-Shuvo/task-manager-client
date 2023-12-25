import { FaHome, FaThList } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/');
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="flex flex-col justify-between pb-16 w-36 md:w-64 min-h-screen bg-gradient-to-b from-cyan-300/80 to-blue-500/80">
                <ul className="menu p-4">
                    <div className="flex justify-center">
                        {/* <img className="w-48" src={user.photoURL} alt="" /> */}
                        {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                            <div className="w-12 md:w-20 rounded-full">
                                
                            </div>
                        </label> */}
                        <div className="avatar">
                            <div className="w-8 md:w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/tasks'>
                            <FaThList></FaThList>
                            My Tasks
                        </NavLink>
                    </li>
                </ul>
                <ul className="menu p-4">
                    <li onClick={handleLogOut}>
                        <Link>
                            <MdLogout className="text-xl"></MdLogout> Log Out
                        </Link>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 md:p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;