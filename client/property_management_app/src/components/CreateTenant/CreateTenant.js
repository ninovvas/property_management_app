import { useContext } from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";

export const CreateTenant = ({
    tenantService
}) => {

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
                                                                className="form-control" 
                                                                id="firstName" 
                                                                name="firstName" 
                                                                placeholder="Enter your first name"
                                                                value={values.firstName}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="lastName">First name</label>
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="lastName" 
                                                                name="lastName" 
                                                              
                                                                placeholder="Enter your last name"
                                                                value={values.lastName}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label for="exampleInputEmail1">Email address</label>
                                                                <input 
                                                                type="email" 
                                                                className="form-control" 
                                                                id="exampleInputEmail1" 
                                                                name="email" 
                                                               
                                                                placeholder="Enter your email"
                                                                value={values.email}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="phone">Phone number</label>
                                                                <input 
                                                                type="tel" 
                                                                className="form-control" 
                                                                id="phone" 
                                                                name="phone" 
                                                              
                                                                placeholder="Enter your phone number"
                                                                value={values.phone}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="address">Address</label>
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="address" 
                                                                name="address" 
                                                              
                                                                placeholder="Enter your current address"
                                                                value={values.address}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>
                                                        

                                                            <div className="form-group">
                                                                <label for="iban">IBAN</label>
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="iban" 
                                                                name="iban" 
                                                              
                                                                placeholder=" (Optional) Enter your IBAN"
                                                                value={values.iban}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="bic">BIC/SWIFT</label>
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="bic" 
                                                                name="bic" 
                                                              
                                                                placeholder=" (Optional) Enter your BIC/SWIFT"
                                                                value={values.bic}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>

                                                            
                                                            <button type="submit" className="btn btn-primary">{buttonTenant}</button>
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