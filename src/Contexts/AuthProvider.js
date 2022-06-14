import React, { createContext } from 'react';
import UseCart from '../components/Hooks/UseCart';
 
import useFirebase from '../Hooks/UseFirebase';
 
 

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext =  useFirebase();
    const {addToCart,selectedService,remove,setSelectedService}=UseCart
    ();
    const data={allContext,addToCart,selectedService,remove,setSelectedService};
    return (
        <AuthContext.Provider value={data}>;
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;