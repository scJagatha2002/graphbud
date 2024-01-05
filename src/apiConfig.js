import axios from "axios";

const Base_Url = "http://localhost:3000";



export const api = axios.create({
    baseURL: Base_Url,  // Specify the base URL here
    headers: {
        
        "Content-Type": "application/json"
    }
});
