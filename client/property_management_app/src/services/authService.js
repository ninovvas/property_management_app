
import * as request from "./requester";

const baseUrl = 'http://localhost:3005/api';


export const register = (email, username, first_name, last_name , address, password, repeatPassword) => 
    request.post(`${baseUrl}/register`, {email, username, first_name, last_name , address, password, repeatPassword})


    export const login = (email, password) => 
    request.post(`${baseUrl}/login`, { email, password });
