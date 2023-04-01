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

function App() {

    const [cookies] = useCookies();
      //const isLogged = true;
      //const cookies = new Cookies();
     
      
    const navigate = useNavigate();
      //const [auth, setAuth] = useState({});
      const [auth, setAuth] = useLocalStorage('accessToken', {});
      
    const propertyService = propertyServiceFactory(auth.accessToken);
    const tenantService = tenantServiceFactory(auth.accessToken);
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

            navigate('/dashboard');
        } catch (error) {
          console.log(error)
            console.log('There is a problem');
            //navigate(/404)
        }
    };

    const onRegisterSubmit = async (values) => {
      
      const { confirmPassword, ...registerData } = values;
      if (confirmPassword !== registerData.password) {
          return;
      }

      try {
          const result = await authService.register(registerData);

          setAuth(result);

          navigate('/dashboard');
      } catch (error) {
          console.log('There is a problem');
          //404
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

      navigate('/dashboard');
  };


  const onTenantSubmit = async (data) => {
    const newTenant = await tenantService.createTenant(data);
    //setProperties
    //setProperties((state) => [{...state, newProperty}]);
    navigate('/dashboard');
    
}


      const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onCreatePropertySubmit,
        onTenantSubmit,
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
         
            <Routes>
              <Route path='*' element={<h1>404</h1>} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route element={<RouteGuard />}>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/property/' element={<Property propertyService={propertyService}/>}></Route>
                <Route path='/create_property/' element={<CreateObject />}></Route>
                <Route path='/create_tenant/' element={<CreateTenant />}></Route>
                <Route path='/tenants/' element={<TenantList tenantService={tenantService}/>}></Route>
                <Route path='/property/details/:propertyId' element={<PropertyDetails propertyService={propertyService}/>} />
                <Route path='/property/edit/:propertyId' element={<EditProperty propertyService={propertyService}/>} />
              </Route>
            </Routes>
          </>
        </AuthContext.Provider>

      );
}

export default App;
