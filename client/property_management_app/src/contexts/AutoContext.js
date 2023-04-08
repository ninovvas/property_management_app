import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { NavigationMenu } from "../components/Navigation/NavigationMenu";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('accessToken', {});

    const authService = authServiceFactory(auth.accessToken)

    const [serverErrors, setServerErrors] = useState({
        login: {},
        register: {}
      });

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

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        // userId: auth._id,
        // token: auth.accessToken,
        // userEmail: auth.email,
        // isAuthenticated: !!auth.accessToken,
        // serverErrors,
        serverErrors,
        firstName: auth.first_name,
        lastName: auth.last_name,
        address: auth.address,
        userId: auth._id,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
            {contextValues.isAuthenticated ? 
          (<> <NavigationMenu /> 
          <Header /></>) : ("")}
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};