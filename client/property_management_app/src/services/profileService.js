import { baseUrl } from "../constants";
import { requestFactory } from "./requester";

const url = `${baseUrl}/users`;

export const profileServiceFactory = (token) => {
    const request = requestFactory(token);

   
    const getProfileById = async () => {
        const result = await request.get(`${url}/profile`);
        console.log(result);
    
        return result;
    }


    const editProfile = async (data) => {
        const result = await request.put(`${url}/profile`, data);
        console.log(result);
    
        return result;
    }


    return {
        getProfileById,
        editProfile
        
        
    };


    
}