import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import {AuthContext} from "../../contexts/AutoContext"
import { useForm } from "../../hooks/useForm";
//import * as authService from "../../services/authService";

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    // const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     authService.login(email, password)
    //     .then(authData => {
    //         //TODO: Error Message Validation
    //         userLogin(authData);
    //         navigate('/dashboard');
    //     })
    //     .catch(() => {
    //         navigate('/404');
    //     })

    // }

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    // const onEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const onPasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }

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
            
            <form id="login" method="POST" onSubmit={onSubmit}>
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
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={changeHandler}/>
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="password" 
                                name="password"
                                id="password"
                                value={values.password}
                                onChange={changeHandler}
                                />
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4">Login</button>
                            <p className="mb-0 text-muted">Don’t have an account? <Link to={"/register"}>Register</Link></p>
                        </div>
                    </div>
                </div>
            </form>
    </div>
    </>
    );

}