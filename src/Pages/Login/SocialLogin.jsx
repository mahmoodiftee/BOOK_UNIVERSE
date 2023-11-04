import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {

    const { user, googleLogin, githubLogin } = useContext(AuthContext)

    const handleLogin = (media) => {
        media()
        .then(res=> console.log(res.user))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div className="divider text-white">continue with</div>
            <div className="flex gap-6 justify-center items-center">
                <FcGoogle className="text-[41px] cursor-pointer" onClick={()=>handleLogin(googleLogin)}></FcGoogle>
                <FaGithub className="text-4xl cursor-pointer text-white" onClick={()=>handleLogin(githubLogin)} ></FaGithub>
            </div>
        </>
    );
};

export default SocialLogin;