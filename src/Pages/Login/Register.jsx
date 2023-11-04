import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    // const navigate = useNavigate();
    // const { createUser } = useContext(AuthContext);
    // const handleCreateUser = async (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     try {
    //         await createUser(email, password);
    //         updateProfile(auth.currentUser, {
    //             displayName: "Jane Q. User", 
    //             photoURL: "https://example.com/jane-q-user/profile.jpg"
    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //         navigate("/");
    //     } catch (error) {
    //         console.log("Login error:", error);
    //     }
    // }




    return (
        <>
            this is registration
        </>
    );
};

export default Register;