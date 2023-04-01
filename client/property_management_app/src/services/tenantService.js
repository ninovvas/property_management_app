import { baseUrl } from "../constants";
import { requestFactory } from "./requester";

const url = `${baseUrl}/tenant`;

export const tenantServiceFactory = (token) => {
    const request = requestFactory(token);

    const createTenant = async (data) => {
        console.log(data);
        const result = await request.post(url, data);
        console.log(result);
        
        return result;
    };

    // const getAllProperties = async () => {
    //     const result = await request.get(url);
    //     console.log(result);
    //     const properties = Object.values(result);
    
    //     return properties;
    // };

    // const getPropertyById = async (propertyID) => {
    //     const result = await request.get(`${url}/details/${propertyID}`);
    //     console.log(result);
    
    //     return result;
    // }

    // const editProperty = async (propertyID, data) => {
    //     const result = await request.put(`${url}/edit/${propertyID}`, data);
    //     console.log(result);
    
    //     return result;
    // }


    return {
        createTenant,
        // getAllProperties,
        // getPropertyById,
        // editProperty
    };


    
}