import React from 'react';
 
import {Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
 
import Loading from '../Loading/Loading';
 

const PrivateRoute = ({ children }) => {
    const { user, isLoading } =  useAuth();
    let location=useLocation();
    if (isLoading) {return <Loading></Loading>};
    if(user?.displayName){  
        return children;
    }
    return <Navigate to="/login" replace state={{from:location}}/>;
         
     
};

export default PrivateRoute;