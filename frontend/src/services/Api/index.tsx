import axios from "axios";




const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const Api = axios.create({
    baseURL:"http://localhost:5173",
    headers,
})

export default Api;