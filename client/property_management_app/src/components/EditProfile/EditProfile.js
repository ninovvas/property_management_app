import { useContext, useEffect, useState } from "react";
import validator from "validator";
import { AuthContext } from "../../contexts/AutoContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { confirmPassword } from "../../utils/confirmPassword";
import { isCorrectPassword } from "../../utils/isCorrectPassword";

export const EditProfile = ({
    profileService
}) => {

    const {onEditProfileSubmit, serverErrors, userId} = useContext(AuthContext);

    const { values, changeHandler, onSubmit, changeValues} = useForm({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        properties: [{}],
        tenants: [{}],
        tenancies: [{}]
    }, onEditProfileSubmit);

    useEffect(() => {
        profileService.getProfileById()
            .then(result => {
                const newResult = {
                    id: result._id,
                    username: result.username,
                    email: result.email,
                    first_name: result.first_name,
                    last_name: result.last_name,
                    address: result.address, 
                }
                console.log("result");
                console.log(result)
                changeValues(result);
                //state => ({...state, [e.target.name]: e.target.value})
                //console.log(formData);
            });
    }, [userId]);

    console.log(values);



    const [errors, setErrors] = useState({
        username: false,
        email: false,
        first_name: false,
        last_name: false,
        address: false,
       

    });

    return(
        <>
         
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="page-header">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Profile</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"/profile"}>My Profile</Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>Edit Profile</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="main-body">
                            <div className="page-wrapper">
                              
                                <div className="row">
                                    <div className="col-sm-12">

                                        <div className="card">
                                            <div className="card-header">
                                                <h5>My Profile</h5>
                                            </div>
                                            <div className="card-body">
                                                
                                                <div className="row">
                                                    <div className="col-md-6">    
                                                <form id="register" method="PUT" onSubmit={onSubmit}>
                                                    <div className="auth-content">
                                                        
                                                        <div className="card">
                                                            <div className="card-body text-center">
                                                                <div className="mb-4">
                                                                    <i className="feather icon-user-plus auth-icon"></i>
                                                                </div>
                                                                <h3 className="mb-4">Edit Profile</h3>
                                                                
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
                                                               


                                                                {validator.isEmpty(values.username) ||
                                                                validator.isEmpty(values.email) ||
                                                                validator.isEmpty(values.first_name) ||
                                                                validator.isEmpty(values.last_name) ||
                                                                validator.isEmpty(values.address) ||
                                                                !validator.isEmail(values.email)
                                                                    ? (<button className="btn btn-primary shadow-2 mb-4" disabled>Edit Profile</button>) :
                                                                                            (<button className="btn btn-primary shadow-2 mb-4">Edit Profile</button>)

                                                                                            }
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>                                                                      
                        </div>                                                                    
                   </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
    );
}