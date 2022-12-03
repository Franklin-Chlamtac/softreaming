import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import { AuthContext } from "./AuthContext";


export const RequireAuth = ({ children }: { children: JSX.Element}) => {
    const auth = useContext(AuthContext);
    

    if(!auth.user) {
        return <Navigate to ="/login"/>
    }
    return children;
}