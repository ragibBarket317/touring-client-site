import React from 'react';
import user from '../../images/user.png';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';


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
        <div className="py-5 text-center bg-color">
            <div className="py-5 my-5 container d-flex justify-content-center">
                <div className="bg-white shadow p-5">
                    <div>
                        <h1 className="mb-3">Login </h1>
                        <div className="login-img mb-3">
                            <img src={user} alt="" />
                        </div>
                        <button onClick={googleLogin} className="btn btn-primary">Google sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;