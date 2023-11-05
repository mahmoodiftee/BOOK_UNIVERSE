import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = (media) => {
        media()
            .then((res) => {
                console.log(res.user);
                Swal.fire({
                    icon: 'success',
                    text: 'User signed in successfully',
                });
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="h-screen">
            <div className="divider text-white">continue with</div>
            <div className="flex gap-6 justify-center items-center">
                <FcGoogle className="text-[41px] cursor-pointer" onClick={() => handleLogin(googleLogin)}></FcGoogle>
                <FaGithub className="text-4xl cursor-pointer text-white" onClick={() => handleLogin(githubLogin)} ></FaGithub>
            </div>
        </div>
    );
};

export default SocialLogin;