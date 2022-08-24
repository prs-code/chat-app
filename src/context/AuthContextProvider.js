import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { auth } from "../firebase";
//create context
export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => { //on change get data and redirect user to new address
            setUser(user);
            setLoading(false);
            if (user) navigate ("/chats");
        })
    }, [user, navigate]);


    return (
      <AuthContext.Provider value={user}>
        {!loading && children}
      </AuthContext.Provider>
    );
};

export default AuthContextProvider;