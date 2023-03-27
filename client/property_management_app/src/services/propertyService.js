import { baseUrl } from "../constants";
import { requestFactory } from "./requester";

const url = `${baseUrl}/property`;

export const propertyServiceFactory = (token) => {
    const request = requestFactory(token);

    const createObject = async (data) => {
        console.log(data);
        const result = await request.post(url, data);
        console.log(result);
        
        return result;
    };

    const getAllProperties = async () => {
        const result = await request.get(url);
        console.log(result);
        const properties = Object.values(result);
    
        return properties;
    };


    return {
        createObject,
        getAllProperties
    };


    
}


    