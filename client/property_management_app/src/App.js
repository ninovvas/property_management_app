import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './contexts/AutoContext';

import './App.css';
//import { useLocalStorage } from "./hooks/useLocalStorage";

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
import { useState } from 'react';

function App() {
      //const isLogged = true;
      //const [auth, setAuth] = useLocalStorage('auth', {});
      const navigate = useNavigate();
      const [auth, setAuth] = useState({});
      const [properties, setProperties] = useState([]);
      const propertyService = propertyServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken)
    
    console.log(auth);

      // const userLogin = (authData) => {
      //   setAuth(authData);
      // };

      // const userLogout = () => {
      //     setAuth({});
      // };

      const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            console.log(result);
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
        await authService.logout();

        setAuth({});
    };


    const onCreatePropertySubmit = async (data) => {
      const newProperty = await propertyService.createObject(data);

      setProperties(state => [...state, newProperty]);

      navigate('/dashboard');
  };


      const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
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
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/logout' element={<Logout />}></Route>
              <Route path='/create_object/' element={<CreateObject onCreatePropertySubmit={onCreatePropertySubmit}/>}></Route>
            </Routes>
          </>
        </AuthContext.Provider>

      );
}

export default App;
