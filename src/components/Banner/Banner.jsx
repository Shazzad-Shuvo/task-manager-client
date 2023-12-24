import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold">Manage your tasks <br /> in a convenient manner <br /> with us!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <Link to='/login'>
                            <button className="btn  bg-gradient-to-r from-cyan-300/80 to-blue-500/80 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-700/80 text-white mt-6">Let's Explore</button>
                        </Link>
                    </div>
                    <img src="https://i.ibb.co/HFj3z2q/4894122.jpg" className="max-w-sm rounded-lg flex-1" />
                </div>
            </div>
        </div>
    );
};

export default Banner;