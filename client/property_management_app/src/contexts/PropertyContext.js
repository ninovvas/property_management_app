import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileServiceFactory } from "../services/profileService";
import { propertyServiceFactory } from "../services/propertyService";
import { tenancyServiceFactory } from "../services/tenancyService";
import { tenantServiceFactory } from "../services/tenantService";

export const PropertyContext = createContext();

export const PropertyProvider = ({
    children
}) => {

    const [tenancy, setTenancy] = useState({});
    const navigate = useNavigate();

    const propertyService = propertyServiceFactory();
    const tenantService = tenantServiceFactory();
    const tenancyService = tenancyServiceFactory();
    //const authService = authServiceFactory(auth.accessToken);
    const profileService = profileServiceFactory();

    
    const onCreatePropertySubmit = async (data) => {
        const newProperty = await propertyService.createObject(data);
        console.log("newProperty")
        console.log(newProperty)
        //setProperties
        //setProperties((state) => [{...state, newProperty}]);
  
        navigate('/property');
    };
  
    const onEditPropertySubmit = async (data) => {
    
      const editProperty = await propertyService.editProperty(data._id, data);
  
      navigate(`/property/details/${data._id}`);
  };
  
  const onEditProfileSubmit = async (data) => {
    
    const editProfile = await profileService.editProfile(data);
  
    navigate(`/profile`);
  };
  
  
    const onTenantSubmit = async (data) => {
      const newTenant = await tenantService.createTenant(data);
     
      navigate('/tenants');
      
  }
  
  
  const onTenancySubmit = async (data) => {
    const newData = {
      contractNumber: data.contractNumber,
      monthlyRent: data.monthlyRent,
      securityGuaranty: data.securityGuaranty,
      startTenancy: data.startTenancy,
      endTenancy: data.endTenancy,
      comment: data.comment,
      userId: data.userId,
      tenantId: data.tenantId,
      propertyId: data.propertyId
  
    }
    console.log(data);
    const newTenancy = await tenancyService.createTenancy(newData);
   
    navigate('/tenancy');
    
  }
  
  const onTenancyEditSubmit = async (data) => {
    const newData = {
      _id: data._id,
      contractNumber: data.contractNumber,
      monthlyRent: data.monthlyRent,
      securityGuaranty: data.securityGuaranty,
      startTenancy: data.startTenancy,
      endTenancy: data.endTenancy,
      comment: data.comment,
      userId: data.userId,
      tenantId: data.tenantId,
      propertyId: data.propertyId
  
    }
    console.log("onTenancyEditSubmit");
    console.log(data);
    const newTenancy = await tenancyService.editTenancy(data._id, newData);
    
    navigate(`/tenancy/details/${data._id}`);
    
  }
  
  
  const onTenantEditSubmit = async (values) => {
    const result = await tenantService.editTenant(values._id, values);
  
    //setGames(state => state.map(x => x._id === values._id ? result : x))
    
  
    navigate(`/tenant/details/${values._id}`);
  }

  const contextValues = {
    // onLoginSubmit,
    // onRegisterSubmit,
    // onLogout,
    onCreatePropertySubmit,
    onEditPropertySubmit,
    onTenantSubmit,
    onTenantEditSubmit,
    onTenancySubmit,
    onTenancyEditSubmit,
    onEditProfileSubmit,
    profileService,
    propertyService,
    tenancyService,
    tenantService,
    // serverErrors,
    // firstName: auth.first_name,
    // lastName: auth.last_name,
    // address: auth.address,
    // userId: auth._id,
    // token: auth.accessToken,
    // isAuthenticated: !!auth.accessToken,
  }

  return (
    <PropertyContext.Provider value={contextValues}>
        {children}
    </PropertyContext.Provider>
);


}

export const usePropertyContext = () => {
    const context = useContext(PropertyContext);

    return context;
};