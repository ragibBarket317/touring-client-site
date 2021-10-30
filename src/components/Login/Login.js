import React from 'react';
import user from '../../images/user.png';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const googleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
                console.log(result)
            })
    }
    return (
        <div className="py-5 text-center">
            <img src={user} alt="" />
            <button onClick={googleLogin} className="btn btn-primary">Google sign in</button>
        </div>
    );
};

export default Login;