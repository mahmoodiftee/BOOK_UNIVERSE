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
        <div className="">
            <div className="divider font-bold">continue with</div>
            <div className="flex gap-6 justify-center items-center">
                <FcGoogle className="text-[41px] cursor-pointer" onClick={() => handleLogin(googleLogin)}></FcGoogle>
            </div>
        </div>
    );
};

export default SocialLogin;