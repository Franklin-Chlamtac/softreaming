import { Children, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { UserType } from "../../types/UserType"
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const api = useApi();

    const signin = async (email: string, password:string) => {

        const data = await api.signin(email, password);
        if(data.user && data.token){
            setUser(data.user);
            return true;
        }
        return false;

    }

    const logout = async() => {
        await api.logout();
        setUser(null);
    }


    return (
        <AuthContext.Provider value={ {user, signin, logout} } >
            {children}
        </AuthContext.Provider>
    );
}

