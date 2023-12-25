import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const GithubLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('State in the location login page:', location.state);

    const { signInWithGithub } = useAuth();

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log('github sign in of:', user);

                Swal.fire({
                    icon: "success",
                    title: "User Logged In Successfully!!",
                    showConfirmButton: false,
                    timer: 1500,
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });

                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="px-8 pb-8">
            <div>
                <button onClick={handleGithubSignIn} className="btn w-full">
                    <FaGithub className="text-2xl"></FaGithub>
                    Sign in with Github
                </button>
            </div>
        </div>
    );
};

export default GithubLogin;