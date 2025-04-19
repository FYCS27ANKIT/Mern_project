import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[auth, setAuth] = useState({isAuthenticated : false, user : null, loading : true});

    useEffect(() => {
        axios.get("/check-auth", {withCredentials : true})
        .then(res => setAuth({isAuthenticated : true, user : res.data.user, loading : false}))
        .catch(() => setAuth({isAuthenticated : false, user : null, loading : false}))
    }, []);

    const logout = async() => {
        try {
            await axios.post("http://localhost:3000/logout", {}, {withCredentials: true});
            setAuth({withCredentials : false, user : null, loading : false});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{...auth, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);