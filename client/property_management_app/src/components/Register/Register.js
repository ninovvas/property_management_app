import { useContext, useEffect, useState } from "react";
import { AuthContext, useAuthContext } from "../../contexts/AutoContext";
import { Link } from "react-router-dom";
import validator from "validator";

//import * as authService from "../../services/authService";
import { useForm } from "../../hooks/useForm";
import { isCorrectPassword } from "../../utils/isCorrectPassword";
import { confirmPassword } from "../../utils/confirmPassword";

export const Register = () =>{
    //const {onRegisterSubmit, serverErrors} = useContext(AuthContext);
    const {onRegisterSubmit, serverErrors} = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);


    const [errors, setErrors] = useState({
        username: false,
        email: false,
        first_name: false,
        last_name: false,
        address: false,
        password: false,
        confirmPassword: false,

    });

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
    if(serverErrors.register && Object.keys(serverErrors.register).length > 0){
        setShowMessage(true);
    }
    },[serverErrors.register])
   



    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/"}>Property Management</Link>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <Link to={'/login'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
        <Link to={'/register'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Registration</button></Link>
        </div>
    </nav>
        <div className="auth-wrapper">
            <form id="register" method="POST" onSubmit={onSubmit}>
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
                                <i className="feather icon-user-plus auth-icon"></i>
                            </div>
                            <h3 className="mb-4">Register</h3>
                            {showMessage ? (<div className="error_message">{serverErrors.register.message}</div>) : ("")}
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                className={(validator.isEmpty(values.username) && errors.username) ? "form-control is-invalid": "form-control"} 
                                placeholder="Username"
                                value={values.username}
                                onBlur={() => setErrors({...errors, username:true})}
                                onChange={changeHandler}
                                 />
                                 {validator.isEmpty(values.username) && errors.username ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className={(validator.isEmpty(values.email) && errors.email) || (errors.email && !validator.isEmail(values.email))? "form-control is-invalid": "form-control"}
                                placeholder="Email"
                                value={values.email}
                                onBlur={() => setErrors({...errors, email:true})}
                                onChange={changeHandler} 
                                />
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
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="first_name" 
                                name="first_name" 
                                className={(validator.isEmpty(values.first_name) && errors.first_name) ? "form-control is-invalid": "form-control"}
                                placeholder="First Name"
                                value={values.first_name}
                                onBlur={() => setErrors({...errors, first_name:true})}
                                onChange={changeHandler}
                                />
                                {validator.isEmpty(values.first_name) && errors.first_name ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="last_name" 
                                name="last_name" 
                                className={(validator.isEmpty(values.last_name) && errors.last_name) ? "form-control is-invalid": "form-control"}
                                placeholder="Last Name" 
                                value={values.last_name}
                                onBlur={() => setErrors({...errors, last_name:true})}
                                onChange={changeHandler}/>
                                {validator.isEmpty(values.last_name) && errors.last_name ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                className={(validator.isEmpty(values.address) && errors.address) ? "form-control is-invalid": "form-control"} 
                                placeholder="Address"
                                value={values.address}
                                onBlur={() => setErrors({...errors, address:true})}
                                onChange={changeHandler}/>
                                 {validator.isEmpty(values.address) && errors.address ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                            
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className={(validator.isEmpty(values.password) && errors.password) || (errors.password && isCorrectPassword(values.password)) ? "form-control is-invalid": "form-control"}  
                                placeholder="password" 
                                value={values.password}
                                onBlur={() => setErrors({...errors, password:true})}
                                onChange={changeHandler}/>

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
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                name="confirmPassword" 
                                id="confirmPassword" 
                                className={(validator.isEmpty(values.confirmPassword) && errors.confirmPassword) || 
                                    (errors.confirmPassword && isCorrectPassword(values.confirmPassword)) ||
                                    (confirmPassword(values.password, values.confirmPassword) && errors.confirmPassword) ? "form-control is-invalid": "form-control"} 
                                placeholder="password" 
                                value={values.confirmPassword}
                                onBlur={() => setErrors({...errors, confirmPassword:true})}
                                onChange={changeHandler}/>

                                {validator.isEmpty(values.confirmPassword) && errors.confirmPassword ? (
                                <div className="invalid-feedback">
                                This is a required field
                                </div>
                                    ) : ("")}
                                 {isCorrectPassword(values.confirmPassword) && errors.confirmPassword ? (
                                <div className="invalid-feedback">
                                Password should be minimum 5 characters!  
                                </div>
                                    ) : ("")}

                                {confirmPassword(values.password, values.confirmPassword) && errors.confirmPassword ? (
                                <div className="invalid-feedback">
                                The length of the password and the confirm password is not equal! 
                                </div>
                                    ) : ("")}
                            </div>


                            {validator.isEmpty(values.username) ||
                            validator.isEmpty(values.email) ||
                            validator.isEmpty(values.first_name) ||
                            validator.isEmpty(values.last_name) ||
                            validator.isEmpty(values.address) ||
                            validator.isEmpty(values.password) ||
                            validator.isEmpty(values.confirmPassword) ||
                            confirmPassword(values.password, values.confirmPassword) ||
                            isCorrectPassword(values.confirmPassword) ||
                            !validator.isEmail(values.email) ||
                                isCorrectPassword(values.password) ? (<button className="btn btn-primary shadow-2 mb-4" disabled>Sign up</button>) :
                                                        (<button className="btn btn-primary shadow-2 mb-4">Sign up</button>)

                                                        }
                            
                            


                            <p className="mb-0 text-muted">All ready have an account? <Link to={"/dashboard"}> Log in</Link></p>
                        </div>
                    </div>
                </div>
            </form>
    </div>
    </>
    );
}