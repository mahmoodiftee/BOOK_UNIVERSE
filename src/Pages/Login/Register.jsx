import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import auth from '../../FireBase/Firebase.Cofig';
import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/json/reg.json';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignUp = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        console.log(email, password, name, photoURL);
        if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            Swal.fire({
                icon: 'error',
                text: 'Password must be at least 6 characters, contain one uppercase letter, and one special character',
            })
            return;
        }

        try {
            await createUser(email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL
            });
            Swal.fire({
                icon: 'success',
                text: 'user created successfully',
            })
            console.log('user created successfully')
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: `${error.message}`,
            })
            console.log(error.message);
        }

    }
    return (
        <div className="h-screen lg:-ml-10 lg:-mt-10 flex justify-center items-center lg:gap-6 mx-4">
            <Player
                autoplay
                loop
                src={json}
                className='h-[250px] w-[250px] lg:h-[700px] lg:w-[700px] hidden lg:block'  
            >
            </Player>
            <form onSubmit={handleSignUp} className="inset-0 backdrop-filter backdrop-blur-md bg-opacity-40">
                <div className='flex justify-center items-center'>
                    <div className="relative flex w-[350px] lg:w-96 flex-col rounded-xl bg-base-200 bg-clip-border shadow-md">
                        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-lg bg-gradient-to-tr from-colour-50 to-[#ffbc6a] bg-clip-border text-white shadow-md shadow-[#ffbc6a]">
                            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                                Sign Up
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4 pt-6 pl-6 pr-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <div className="form-control">
                                    <input type="text" name="name" required placeholder="Your Name" className="input border-none input-bordered" />
                                </div>
                            </div>
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
                            <div className="relative h-11 w-full min-w-[200px]">
                                <div className="form-control">
                                    <input type="text" name="photoURL" required placeholder="Your Photo url" className="input border-none input-bordered" />
                                </div>
                            </div>
                            <button
                                className="block mt-4 w-full select-none rounded-lg bg-gradient-to-tr from-colour-60 to-[#3c7563] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm shadow-colour-60 transition-all hover:shadow-lg hover:shadow-[#3c7563] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="pb-6 pl-6 pr-6 pt-0">
                            <p className="mt-6 flex justify-center font-sans text-sm font-normalleading-normal text-inherit antialiased">
                                Already have an account?
                                <Link to={'/login'}
                                    href="#signup"
                                    className="ml-1 block font-sans text-sm font-bold leading-normal antialiased"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;