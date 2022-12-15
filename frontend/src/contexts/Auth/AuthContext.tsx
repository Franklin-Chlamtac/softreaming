import { createContext } from "react";
import { UserType } from "../../types/UserType";


export type AuthContextType = {
    user: UserType | null;
    signin: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}
export const AuthContext = createContext<AuthContextType>(null!);
