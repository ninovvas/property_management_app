import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import {AuthContext} from "../../contexts/AutoContext"
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        authService.login(email, password)
        .then(authData => {
            userLogin(authData);
            navigate('/');
        })
        .catch(() => {
            navigate('/404');
        })

    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Property Management</a>
   
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <Link to={'/login'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
            <Link to={'/register'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Registration</button></Link>
            </div>
        </nav>

        <div className="auth-wrapper">
            
            <form id="login" onSubmit={onSubmit}>
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r"></span>
                        <span className="r s"></span>
                        <span className="r s"></span>
                        <span className="r"></span>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon"></i>
                            </div>
                            <h3 className="mb-4">Login</h3>
                            <div className="input-group mb-3">
                                <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                name="login"
                                id="login"
                                value={email}
                                onChange={onEmailChange}/>
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="password" 
                                name="password"
                                id="password"
                                value={password}
                                onChange={onPasswordChange}
                                />
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4">Login</button>
                            <p className="mb-0 text-muted">Don’t have an account? <a href="auth-signup.html">Signup</a></p>
                        </div>
                    </div>
                </div>
            </form>
    </div>
    </>
    );

}