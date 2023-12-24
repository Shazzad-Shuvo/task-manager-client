import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {PulseLoader} from "react-spinners"

const PrivateRoute = ({ children }) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <div className="flex justify-center items-center my-20">
            <PulseLoader color="#36d1d6" size={120}/>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;