import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AutoContext';

import './App.css';
import { useLocalStorage } from "./hooks/useLocalStorage";

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { NavigationMenu } from './components/Navigation/NavigationMenu';
import { Register } from './components/Register/Register';

function App() {
      const isLogged = true;
      const [auth, setAuth] = useLocalStorage('auth', {});

      const userLogin = (authData) => {
        setAuth(authData);
      };

      const userLogout = () => {
          setAuth({});
      };

      return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}> //, userLogin, userLogout
          <>
            {!isLogged && <NavigationMenu />}
            {!isLogged && <Header />}

            <Routes>
              <Route path='*' element={<h1>404</h1>} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Routes>
          </>
        </AuthContext.Provider>

      );
}

export default App;
