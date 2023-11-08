import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/login.json';
const Login = () => {
    const location = useLocation();
    const { LoginUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await LoginUser(email, password);
            Swal.fire({
                icon: 'success',
                text: 'user logged in successfully',
            })
            navigate(location?.state ? location.state : '/');
        }

        catch (error) {
            Swal.fire({
                icon: 'error',
                text: `${error.message}`,
            })
        }
    };
    return (
        <div className="h-screen lg:-ml-20 lg:-mt-10 flex justify-center items-center lg:gap-6 mx-4">
            <Player
                autoplay
                loop
                src={json}
                className='h-[250px] w-[250px] lg:h-[550px] lg:w-[550px] hidden lg:block'  
            >
            </Player>
            <form onSubmit={handleSignIn} className="inset-0 backdrop-filter backdrop-blur-md bg-opacity-40">
                <div className='flex justify-center items-center'>
                    <div className="relative w-[350px] lg:w-96 flex flex-col rounded-xl bg-base-200 bg-clip-border shadow-md">
                        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-lg bg-gradient-to-tr from-colour-50 to-[#ffbc6a] bg-clip-border text-white shadow-md shadow-[#ffbc6a]">
                            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                                Sign In
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4 pt-6 pl-6 pr-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <div className="form-control">
                                    <input type="email" name="email" required placeholder="email" className="input border-none input-bordered" />
                                </div>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <div className="form-control">
                                    <input type="password" name="password" required placeholder="password" className="input border-none input-bordered" />
                                </div>
                            </div>
                            <button
                                className="block mt-4 w-full select-none rounded-lg bg-gradient-to-tr from-colour-60 to-[#3c7563] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm shadow-colour-60 transition-all hover:shadow-lg hover:shadow-[#3c7563] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="pb-6 pl-6 pr-6 pt-0">
                            <p className="mt-6 flex justify-center font-sans text-sm font-normalleading-normal text-inherit antialiased">
                                Don't have an account?
                                <Link to={'/register'}
                                    href="#register"
                                    className="ml-1 block font-sans text-sm font-bold leading-normal antialiased"
                                >
                                    Sign Up
                                </Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
