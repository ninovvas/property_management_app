import "./Login.module.css"

import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import validator from "validator";

import {AuthContext, useAuthContext} from "../../contexts/AutoContext"
import { useForm } from "../../hooks/useForm";
import { isCorrectPassword } from "../../utils/isCorrectPassword";


export const Login = () => {
    //const { onLoginSubmit, serverErrors } = useContext(AuthContext);
    const { onLoginSubmit, serverErrors } = useAuthContext();

    
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);


    const [errors, setErrors] = useState({
        email: false,
        password: false
    });

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        //setShowMessage(false);
    if(serverErrors.login && Object.keys(serverErrors.login).length > 0){
        setShowMessage(true);
    }
    },[serverErrors, values.email, values.password])
   



    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={"/home"}>Property Management</Link>
   
  
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
                            {showMessage ? (<div className="error_message">{serverErrors.login.message}</div>) : ("")}
                            <div className="input-group mb-3">
                                <input 
                                type="email" 
                                className={(validator.isEmpty(values.email) && errors.email) || (errors.email && !validator.isEmail(values.email)) ? "form-control is-invalid": "form-control"}  
                                placeholder="Email" 
                                name="email"
                                id="email"
                                value={values.email}
                                onBlur={() => setErrors({...errors, email:true})}
                                onChange={changeHandler}/>
                                {validator.isEmpty(values.email) && errors.email ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                                {errors.email && !validator.isEmail(values.email)  ? (
                                <div className="invalid-feedback">
                                The email address is not correct! Please enter a correct email address!
                                </div>
                                    ) : ("")}
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                className={(validator.isEmpty(values.password) && errors.password) || (errors.password && isCorrectPassword(values.password)) ? "form-control is-invalid": "form-control"}  
                                placeholder="password" 
                                name="password"
                                id="password"
                                value={values.password}
                                onBlur={() => setErrors({...errors, password:true})}
                                onChange={changeHandler}
                                />
                                {validator.isEmpty(values.password) && errors.password ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                                 {isCorrectPassword(values.password) && errors.password ? (
                                <div className="invalid-feedback">
                                Password should be minimum 5 characters!
                                </div>
                                    ) : ("")}

                            </div>
                            {validator.isEmpty(values.email) ||
                                                        validator.isEmpty(values.password) ||
                                                        !validator.isEmail(values.email) ||
                                                         isCorrectPassword(values.password) ? (<button className="btn btn-primary shadow-2 mb-4" disabled>Login</button>) :
                                                        (<button className="btn btn-primary shadow-2 mb-4">Login</button>)

                                                        }
                            <p className="mb-0 text-muted">Don’t have an account? <Link to={"/register"}>Register</Link></p>
                           
                        </div>
                    </div>
                </div>
            </form>
    </div>
    </>
    );

}