import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { Link } from "react-router-dom";


import * as authService from "../../services/authService";

export const Register = () =>{
    const {userLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, steConfirmPassword] = useState('')


    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onConfirmPasswordChange = (e) => {
        steConfirmPassword(e.target.value);
    }

    


    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, username,firstName, lastName, address, password, confirmPassword)
        .then(authData => {
            userLogin(authData);
            navigate('/');
        })


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
            <form id="register" onSubmit={onSubmit}>
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
                                value={username}
                                onChange={onUsernameChange}
                                 />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email"
                                value={email}
                                onChange={onEmailChange} 
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="first_name" 
                                name="first_name" 
                                className="form-control" 
                                placeholder="First Name"
                                value={firstName}
                                onChange={onFirstNameChange}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="last_name" 
                                name="last_name" 
                                className="form-control" 
                                placeholder="Last Name" 
                                value={lastName}
                                onChange={onLastNameChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                className="form-control" 
                                placeholder="Address"
                                value={address}
                                onChange={onAddressChange}/>
                            
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="password" 
                                value={password}
                                onChange={onPasswordChange}/>
                               
                            </div>
                            <div className="input-group mb-4">
                                <input 
                                type="password" 
                                name="confirm-password" 
                                id="confirm-password" 
                                className="form-control"
                                placeholder="password" 
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange}/>
                            </div>
                            
                            <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                            <p className="mb-0 text-muted">Allready have an account? <a href="auth-signin.html"> Log in</a></p>
                        </div>
                    </div>
                </div>
            </form>
    </div>
    </>
    );
}