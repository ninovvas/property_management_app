import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { Link } from "react-router-dom";


//import * as authService from "../../services/authService";
import { useForm } from "../../hooks/useForm";

export const Register = () =>{
    const {onRegisterSubmit} = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [address, setAddress] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, steConfirmPassword] = useState('')


    // const onUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // }

    // const onEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const onFirstNameChange = (e) => {
    //     setFirstName(e.target.value);
    // }

    // const onLastNameChange = (e) => {
    //     setLastName(e.target.value);
    // }

    // const onAddressChange = (e) => {
    //     setAddress(e.target.value);
    // }

    // const onPasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }

    // const onConfirmPasswordChange = (e) => {
    //     steConfirmPassword(e.target.value);
    // }

    


    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     if (password !== confirmPassword) {
    //         return;
    //     }

    //     authService.register(email, username,firstName, lastName, address, password, confirmPassword)
    //     .then(authData => {
    //         userLogin(authData);
    //         navigate('/dashboard');
    //     })


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
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                className="form-control" 
                                placeholder="Username"
                                value={values.username}
                                onChange={changeHandler}
                                 />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email"
                                value={values.email}
                                onChange={changeHandler} 
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="first_name" 
                                name="first_name" 
                                className="form-control" 
                                placeholder="First Name"
                                value={values.first_name}
                                onChange={changeHandler}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="last_name" 
                                name="last_name" 
                                className="form-control" 
                                placeholder="Last Name" 
                                value={values.last_name}
                                onChange={changeHandler}/>
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                className="form-control" 
                                placeholder="Address"
                                value={values.address}
                                onChange={changeHandler}/>
                            
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="password" 
                                value={values.password}
                                onChange={changeHandler}/>
                               
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                name="confirmPassword" 
                                id="confirmPassword" 
                                className="form-control"
                                placeholder="password" 
                                value={values.confirmPassword}
                                onChange={changeHandler}/>
                            </div>
                            
                            <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                            <p className="mb-0 text-muted">Allready have an account? <Link to={"/dashboard"}> Log in</Link></p>
                        </div>
                    </div>
                </div>
            </form>
    </div>
    </>
    );
}