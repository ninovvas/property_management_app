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

    const getAllTenants = async () => {
        const result = await request.get(url);
        console.log(result);
        //const tenants = Object.values(result);
    
        return result;
    };

    const getTenantById = async (tenantID) => {
        const result = await request.get(`${url}/details/${tenantID}`);
        console.log(result);
    
        return result;
    }

    const getTenantByName = async (tenantName) => {
        console.log(tenantName);
        const result = await request.get(`${url}/info/${tenantName}`);
        console.log(result);
    
        return result;
    }

    const editTenant = async (tenantID, data) => {
        const result = await request.put(`${url}/edit/${tenantID}`, data);
        console.log(result);
    
        return result;
    }


    return {
        createTenant,
        getAllTenants,
        getTenantById,
        editTenant,
        getTenantByName
        
    };


    
}