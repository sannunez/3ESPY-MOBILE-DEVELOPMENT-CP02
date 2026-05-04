import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {User} from "../types/user"

type Salutation = "Sr." | "Sra." | "Srta";

type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => boolean;
    logout: () => void;
    loading: boolean;
    salutation: Salutation;
    setSalutation: (value: Salutation) => void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children} : {children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    //Usuários (hardcoded)
    const users: User[] = [
        {
            id: 1,
            username: 'admin',
            password: '123',
            role: 'admin',
            name: 'Administrador',
        },
        {
            id: 2,
            username: 'user',
            password: '123',
            role: 'user',
            name: 'Usuário Comum',
        },
    ];

    // User actions/functions
    useEffect(() => {
        async function loadUser(){
            const storedUser = await AsyncStorage.getItem("@user");
            
            if(storedUser){
                setUser(JSON.parse(storedUser))
            }

            setLoading(false)
        }

        loadUser();
    }, []);

    const login = (username: string, password: string) => {
        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if(foundUser){
            setUser(foundUser);
            AsyncStorage.setItem("@user", JSON.stringify(foundUser));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        AsyncStorage.removeItem("@user")
    };

    // Salutation behavior
    const [salutation, setSalutationState] = useState<Salutation>("Sr.")

    useEffect(() => {
        async function loadSalutation(){
            const storedSalutation = await AsyncStorage.getItem("@salutation");

            if(storedSalutation){
                setSalutationState(JSON.parse(storedSalutation))
            }
        }

        loadSalutation();
    }, [])

    const setSalutation = (value: Salutation) => {
        setSalutationState(value);
        AsyncStorage.setItem("@salutation", JSON.stringify(value))
    }

    return(
        <AuthContext.Provider value={{user, login, logout, loading, salutation, setSalutation}}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth(){
    return useContext(AuthContext);
}