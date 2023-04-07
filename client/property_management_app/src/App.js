import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './contexts/AutoContext';
//import Cookies from 'universal-cookie';

import './App.css';
import { useLocalStorage } from "./hooks/useLocalStorage";
//import Cookies from 'js-cookie';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
//import { NavigationMenu } from './components/Navigation/NavigationMenu';
import { Register } from './components/Register/Register';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Logout } from './components/Logout/Logout';
import { CreateObject } from './components/CreateObject/CreateObject';
import { propertyServiceFactory } from './services/propertyService';
import { authServiceFactory } from './services/authService';
import { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { Property } from './components/Property/Property';
import { NavigationMenu } from './components/Navigation/NavigationMenu';
import { RouteGuard } from './components/common/RouteGuard';
import { PropertyDetails } from './components/PropertyDetails/PropertyDetails';
import { EditProperty } from './components/EditProperty/EditProperty';
import { CreateTenant } from './components/CreateTenant/CreateTenant';
import { tenantServiceFactory } from './services/tenantService';
import { TenantList } from './components/Tenant/TenantList';
import { TenantDetails } from './components/TenantDetails/TenantDetails';
import { EditTenant } from './components/EditTenant/EditTenant';
import { CreateTenancy } from './components/CreateTenancy/CreateTenancy';
import { tenancyServiceFactory } from './services/tenancyService';
import { TenancyList } from './components/Tenancy/TenancyList';
import { TenancyDetails } from './components/TenancyDetails/TenancyDetails';
import { EditTenancy } from './components/EditTenancy/EditTenancy';
import { Profile } from './components/Profile/Profile';

function App() {

    const [cookies] = useCookies();
      //const isLogged = true;
      //const cookies = new Cookies();
     
      
    const navigate = useNavigate();
      //const [auth, setAuth] = useState({});
      const [auth, setAuth] = useLocalStorage('accessToken', {});
      const [tenancy, setTenancy] = useState({});
      const [serverErrors, setServerErrors] = useState({
        login: {},
        register: {}
      })
      
    const propertyService = propertyServiceFactory(auth.accessToken);
    const tenantService = tenantServiceFactory(auth.accessToken);
    const tenancyService = tenancyServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken)
    

    console.log("accessToken");
    console.log(auth.accessToken);

      // const userLogin = (authData) => {
      //   setAuth(authData);
      // };

      // const userLogout = () => {
      //     setAuth({});
      // };

      

      const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            console.log(auth.accessToken);
            setAuth(result);
            setServerErrors({login:{}});

            navigate('/dashboard');
        } catch (error) {
          console.log(error)
          setServerErrors({login: error});
          console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
      
      const { confirmPassword, ...registerData } = values;
      if (confirmPassword !== registerData.password) {
        setServerErrors({register: {message: "The password do not confirm!"}});
          return;
      }

      try {
          const result = await authService.register(registerData);

          setAuth(result);

          navigate('/dashboard');
      } catch (error) {
          setServerErrors({register: error});
          console.log('There is a problem');
         
      }
    };




      const onLogout = async () => {
        const result = await authService.logout();
        console.log(result);
        //cookies.remove('accessToken');
        setAuth({});
    };


    const onCreatePropertySubmit = async (data) => {
      const newProperty = await propertyService.createObject(data);
      console.log("newProperty")
      console.log(newProperty)
      //setProperties
      //setProperties((state) => [{...state, newProperty}]);

      navigate('/property');
  };

  const onEditPropertySubmit = async (data) => {
    console.log("propertyId")
  
    const editProperty = await propertyService.editProperty(data._id, data);
    console.log("editProperty")
    console.log(editProperty)
    //setProperties
    //setProperties((state) => [{...state, newProperty}]);

    navigate(`/property/details/${data._id}`);
};


  const onTenantSubmit = async (data) => {
    const newTenant = await tenantService.createTenant(data);
    //setProperties
    //setProperties((state) => [{...state, newProperty}]);
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
  //setProperties
  //setProperties((state) => [{...state, newProperty}]);
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
  //setProperties
  //setProperties((state) => [{...state, newProperty}]);
  //setTenancy(state => state.map(x => x._id === data._id ? data : x))
  navigate(`/tenancy/details/${data._id}`);
  
}


const onTenantEditSubmit = async (values) => {
  const result = await tenantService.editTenant(values._id, values);

  //setGames(state => state.map(x => x._id === values._id ? result : x))
  

  navigate(`/tenant/details/${values._id}`);
}


      const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onCreatePropertySubmit,
        onEditPropertySubmit,
        onTenantSubmit,
        onTenantEditSubmit,
        onTenancySubmit,
        onTenancyEditSubmit,
        serverErrors,
        firstName: auth.first_name,
        lastName: auth.last_name,
        address: auth.address,
        userId: auth._id,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
      }

      return (
        <AuthContext.Provider value={contextValues}>
          <>
          {!!auth.accessToken ? 
          (<> <NavigationMenu /> 
          <Header /></>) : ("")}
          
         
            <Routes>
              <Route path='*' element={<h1>404</h1>} />
              <Route path='/' element={<Home propertyService={propertyService} tenantService={tenantService} tenancyService={tenancyService} />} />
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
             
              <Route element={<RouteGuard />}>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/dashboard' element={<Dashboard propertyService={propertyService} tenantService={tenantService} tenancyService={tenancyService} />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/property/' element={<Property propertyService={propertyService}/>}></Route>
                <Route path='/create_property/' element={<CreateObject />}></Route>
                <Route path='/create_tenant/' element={<CreateTenant />}></Route>
                <Route path='/create_tenancy/' element={<CreateTenancy tenantService={tenantService} propertyService={propertyService}/>}></Route>
                <Route path='/tenancy/' element={<TenancyList tenancyService={tenancyService} />}></Route>
                <Route path='/tenants/' element={<TenantList tenantService={tenantService} />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/property/details/:propertyId' element={<PropertyDetails propertyService={propertyService}/>} />
                <Route path='/property/edit/:propertyId' element={<EditProperty propertyService={propertyService}/>} />
                <Route path='/tenant/details/:tenantId' element={<TenantDetails tenantService={tenantService}/>} />
                <Route path='/tenant/edit/:tenantId' element={<EditTenant tenantService={tenantService}/>} />
                <Route path='/tenancy/details/:tenancyId' element={<TenancyDetails tenancyService={tenancyService}/>} />
                <Route path='/tenancy/edit/:tenancyId' element={<EditTenancy tenancyService={tenancyService} tenantService={tenantService} propertyService={propertyService}/>} />
              </Route>
              
            </Routes>
          </>
        </AuthContext.Provider>

      );
}

export default App;
