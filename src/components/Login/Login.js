import React from 'react';
import {   useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
 
 

const Login = () => {
    const {allContext} = useAuth();
    const location=useLocation();
    const navigate = useNavigate();
    const redirect = location.state?.from || '/home';

    const {signInUsingGoogle}=allContext;

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result=>{
            navigate(redirect)
        });
    }
   
  
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}  className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;