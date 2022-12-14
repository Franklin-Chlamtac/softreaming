import axios from "axios";
import "dotenv/config";


export const api = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL
})

export const useApi = () => ({
    validateToken: async (token:string) => {
        const response = await api.post('/validate', { token })
        return response.data;

    },

    signup: async (name:string, password:string, email:string)=> {
        const response = await api.post('/user', { name, email, password });
        return response.data;
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/signin', { email, password});
        return response.data;
    },

    logout: async() => {
        const response = await api.post('/logout');
        return response.data;

    }
})