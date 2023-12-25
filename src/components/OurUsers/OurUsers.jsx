import { FaCheck } from "react-icons/fa";

const OurUsers = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Variety of Users</h2>
            <div className="max-w-6xl mx-auto">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/MZNKZ9m/Users.jpg" className="max-w-sm rounded-lg flex-1" />
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold">Our site serves the purpose <br /> for variety of users <br /> from different professions!</h1>

                            <h3 className="mt-4">
                                <p className="flex gap-2 items-center">
                                <FaCheck className="text-green-500"/> Developers
                                </p>
                                <p className="flex gap-2 items-center">
                                <FaCheck className="text-green-500"/> Corporate Professionals
                                </p>
                                <p className="flex gap-2 items-center">
                                <FaCheck className="text-green-500"/> Bankers
                                </p>
                                <p className="flex gap-2 items-center">
                                <FaCheck className="text-green-500"/> Stock Brokers
                                </p>
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurUsers;