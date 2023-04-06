import { useContext, useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";

export const CreateTenant = () => {

    const {userId, onTenantSubmit} = useContext(AuthContext);
    //const navigate = useNavigate();

    const buttonTenant="Create new Tenant"


    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        iban: '',
        bic: '',
        address: '', 
        userId: userId
    }, onTenantSubmit);

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        iban: false,
        bic: false,
        address: false,

    });


    return(
        <>
        <NavigationMenu />
                <Header />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        
                        <div className="page-header">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Tenant</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"/tenants"}>My Tenants</Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>Create Tenant</Link></li>
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
                                                <h5>Create new tenant</h5>
                                            </div>
                                            <div className="card-body">
                                                
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <form method="post" onSubmit={onSubmit}>

                                                            <div className="form-group">
                                                                <label for="firstName">First name</label>
                                                                <input 
                                                                type="text" 
                                                                className={(validator.isEmpty(values.firstName) && errors.firstName) ? "form-control is-invalid": "form-control"}  
                                                                id="firstName" 
                                                                name="firstName" 
                                                                placeholder="Enter your first name"
                                                                value={values.firstName}
                                                                onBlur={() => setErrors({...errors, firstName:true})}
                                                                onChange={changeHandler}
                                                                />
                                                                {validator.isEmpty(values.firstName) && errors.firstName ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="lastName">Last name</label>
                                                                <input 
                                                                type="text" 
                                                                className={(validator.isEmpty(values.lastName) && errors.lastName) ? "form-control is-invalid": "form-control"}
                                                                id="lastName" 
                                                                name="lastName" 
                                                                placeholder="Enter your last name"
                                                                value={values.lastName}
                                                                onBlur={() => setErrors({...errors, lastName:true})}
                                                                onChange={changeHandler}
                                                                />
                                                                {validator.isEmpty(values.lastName) && errors.lastName ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label for="exampleInputEmail1">Email address</label>
                                                                <input 
                                                                type="email" 
                                                                className={(validator.isEmpty(values.email) && errors.email) || (errors.email && !validator.isEmail(values.email))? "form-control is-invalid": "form-control"} 
                                                                id="exampleInputEmail1" 
                                                                name="email" 
                                                                placeholder="Enter your email"
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

                                                            <div className="form-group">
                                                                <label for="phone">Phone number</label>
                                                                <input 
                                                                type="tel" 
                                                                className={(validator.isEmpty(values.phone) && errors.phone) || (!validator.isMobilePhone(values.phone) && errors.phone) ? "form-control is-invalid": "form-control"}
                                                                id="phone" 
                                                                name="phone" 
                                                                placeholder="Enter your phone number"
                                                                value={values.phone}
                                                                onBlur={() => setErrors({...errors, phone:true})}
                                                                onChange={changeHandler}
                                                                />
                                                            
                                                                {validator.isEmpty(values.phone) && errors.phone ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                                {!validator.isMobilePhone(values.phone) && errors.phone ? (
                                                                <div className="invalid-feedback">
                                                                Please enter a correct phone number!
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="address">Address</label>
                                                                <input 
                                                                type="text" 
                                                                className={(validator.isEmpty(values.address) && errors.address) ? "form-control is-invalid": "form-control"}
                                                                id="address" 
                                                                name="address" 
                                                              
                                                                placeholder="Enter your current address"
                                                                value={values.address}
                                                                onBlur={() => setErrors({...errors, address:true})}
                                                                onChange={changeHandler}
                                                                />
                                                                {validator.isEmpty(values.address) && errors.address? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>
                                                        

                                                            <div className="form-group">
                                                                <label for="iban">IBAN</label>
                                                                <input 
                                                                type="text" 
                                                                className={(!validator.isIBAN(values.iban) && errors.iban) ? "form-control is-invalid": "form-control"}
                                                                id="iban" 
                                                                name="iban" 
                                                              
                                                                placeholder=" (Optional) Enter your IBAN"
                                                                value={values.iban}
                                                                onBlur={() => setErrors({...errors, iban:true})}
                                                                onChange={changeHandler}
                                                                />

                                                                {!validator.isIBAN(values.iban) && errors.iban ? (
                                                                <div className="invalid-feedback">
                                                                Please enter the correct IBAN!
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="bic">BIC/SWIFT</label>
                                                                <input 
                                                                type="text" 
                                                                className={(!validator.isBIC(values.bic) && errors.bic) ? "form-control is-invalid": "form-control"}
                                                                id="bic" 
                                                                name="bic" 
                                                              
                                                                placeholder=" (Optional) Enter your BIC/SWIFT"
                                                                value={values.bic}
                                                                onBlur={() => setErrors({...errors, bic:true})}
                                                                onChange={changeHandler}
                                                                />
                                                                {!validator.isBIC(values.bic) && errors.bic ? (
                                                                <div className="invalid-feedback">
                                                                Please enter the correct BIC/SWIFT!
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>

                                                                                    
                                                        {validator.isEmpty(values.firstName) ||
                                                        validator.isEmpty(values.lastName) ||
                                                        validator.isEmpty(values.email) ||
                                                        validator.isEmpty(values.phone) ||
                                                        validator.isEmpty(values.address) ||
                                                        !validator.isEmail(values.email) ||
                                                        !validator.isMobilePhone(values.phone) ? (<button type="submit" className="btn btn-primary" disabled>{buttonTenant}</button>) :
                                                        (<button type="submit" className="btn btn-primary">{buttonTenant}</button>)

                                                        }
                            
                                                            
                                                            
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