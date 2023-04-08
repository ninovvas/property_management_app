import { useContext, useEffect, useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { negativeValue } from "../../utils/negativeValue";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const CreateTenancy = ({
    // tenantService,
    // propertyService

}) => {

    const {tenantService, propertyService } = usePropertyContext();

    const {userId, onTenancySubmit} = useContext(AuthContext);
    //const navigate = useNavigate();

    const buttonTitle="Create new Tenancy"

    

    const { values, changeHandler, onSubmit } = useForm({
        contractNumber: String(Math.random()).substring(2,11),
        monthlyRent: 0,
        securityGuaranty: 0,
        startTenancy: new Date(),
        endTenancy: new Date(),
        comment: "",
        userId: userId,
        tenantId: "",
        propertyId: "",
        tenantName: "",
        propertyName: "",
    }, onTenancySubmit);


    const [tenants, setTenants] = useState([]);
    const [properties, setProperties] = useState([]);
   
    // const handleChangeTenant = (event) => {
    //     const value = event.target.value;
    //     values.tenantId = idTenancies.tenantId;
        
    //   };

    console.log(values);

    useEffect(() => {
        tenantService.getAllTenants()
            .then(result => {
                setTenants(result)
            });
        propertyService.getAllProperties()
        .then(result => {
            setProperties(result)
        });
        tenantService.getTenantByName(values.tenantName)
            .then(result => {
                console.log("getTenantByName");
                console.log(result[0]._id);
                values.tenantId = result[0]._id;
            });
        propertyService.getPropertyByName(values.propertyName)
        .then(result => {
            console.log("propertyName");
            console.log(result);
            values.propertyId = result[0]._id;
        });
        }, [values.tenantName, values.propertyName]);

        
        const [errors, setErrors] = useState({
            monthlyRent: false,
            securityGuaranty: false,
            startTenancy: false,
            endTenancy: false,
            tenantName: false,
            propertyName: false,
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
                                            <h5 className="m-b-10">Tenancy</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"/tenancies"}>My Tenancies</Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>Create Tenancy</Link></li>
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
                                                <h5>Create new tenancy</h5>
                                            </div>
                                            <div className="card-body">
                                                
                                                <div className="row">
                                                    <div className="col-md-6">
                                                    <form method="post" onSubmit={onSubmit}>
                                                            <label forHtml="tenantId">Tenants</label>
                                                            <select 
                                                                className={(validator.isEmpty(values.tenantName) && errors.tenantName) ? "form-control is-invalid": "form-control"} 
                                                                id="tenantName" 
                                                                name="tenantName"
                                                                value={values.tenantName}
                                                                onBlur={() => setErrors({...errors, tenantName:true})}
                                                                onChange={changeHandler}

                                                                >
                                                                    <option value="ChooseTenant" key="chooseTenant">--Choose Tenant--</option>
                                                                    {tenants.map((value, key) => {
                                                                        return (
                                                                            
                                                                        <option value={value.name} key={value._id}>
                                                                            {value.firstName}, {value.lastName}
                                                                        </option>
                                                                        );
                                                                    })}
                                                            </select>

                                                            {validator.isEmpty(values.tenantName) && errors.tenantName ? (
                                                                <div className="invalid-feedback">
                                                                Please select a tenant. If the list is empty, please create first a tenant <Link to={"/create_tenant"}>Create Tenant</Link>
                                                                </div>
                                                                    ) : ("")}

                                                            <label forHtml="country">Properties</label>
                                                            <select 
                                                                className={(validator.isEmpty(values.propertyName) && errors.propertyName) ? "form-control is-invalid": "form-control"} 
                                                                id="propertyName" 
                                                                name="propertyName"
                                                                value={values.propertyName}
                                                                onBlur={() => setErrors({...errors, propertyName:true})}
                                                                onChange={changeHandler}

                                                                >
                                                                    <option value="ChooseProperty" key="chooseProperty">--Choose Property--</option>
                                                                    {properties.map((value, key) => {
                                                                        return (
                                                                            
                                                                        <option value={value.name} key={value._id}>
                                                                            {value.street}, {value.streetNumber}, {value.city}, {value.country}
                                                                        </option>
                                                                        );
                                                                    })}
                                                            </select>

                                                            {validator.isEmpty(values.propertyName) && errors.propertyName ? (
                                                                <div className="invalid-feedback">
                                                                Please select a property. If the list is empty, please create first a property <Link to={"/create_property"}>Create Property</Link>
                                                                </div>
                                                                    ) : ("")}

                                                            <div className="form-group">
                                                                <label forHtml="monthlyRent">Monthly Rent</label>
                                                                <input 
                                                                type="number" 
                                                                className={(negativeValue(values.monthlyRent)  && errors.monthlyRent) || ( validator.isEmpty(String(values.monthlyRent))) ? "form-control is-invalid": "form-control"} 
                                                                id="monthlyRent" 
                                                                name="monthlyRent" 
                                                                placeholder="Enter the monthly rent"
                                                                value={values.monthlyRent}
                                                                onBlur={() => setErrors({...errors, monthlyRent:true})}
                                                                onChange={changeHandler}
                                                                />

                                                                {(negativeValue(values.monthlyRent)   && errors.monthlyRent) || ( validator.isEmpty(String(values.monthlyRent))) ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field and the value should be positive and not zero.
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>
                                                       

                                                            <div className="form-group">
                                                                <label forHtml="securityGuaranty">Security Guaranty</label>
                                                                <input 
                                                                type="number" 
                                                                className={(negativeValue(values.securityGuaranty)  && errors.securityGuaranty) || ( validator.isEmpty(String(values.securityGuaranty))  && errors.securityGuaranty) ? "form-control is-invalid": "form-control"}  
                                                                id="securityGuaranty" 
                                                                name="securityGuaranty" 
                                                                placeholder="Enter the security guaranty"
                                                                value={values.securityGuaranty}
                                                                onBlur={() => setErrors({...errors, securityGuaranty:true})}
                                                                onChange={changeHandler}
                                                                />

                                                                {(negativeValue(values.securityGuaranty)   && errors.securityGuaranty) || ( validator.isEmpty(String(values.securityGuaranty))  && errors.securityGuaranty) ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field and the value should be positive and not zero.
                                                                </div>
                                                                    ) : ("")}
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label forHtml="startTenancy">Start Tenancy</label>
                                                                <input 
                                                                type="date" 
                                                                className= "form-control"
                                                                id="startTenancy" 
                                                                name="startTenancy" 
                                                                placeholder="Enter start Tenancy"
                                                                value={new Date(values.startTenancy).toISOString().slice(0, 10)}
                                                                onChange={changeHandler}
                                                                />

                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label forHtml="endTenancy">End Tenancy</label>
                                                                <input 
                                                                type="date" 
                                                                className= "form-control"  
                                                                id="endTenancy" 
                                                                name="endTenancy" 
                                                                placeholder="Enter End Tenancy"
                                                                value={new Date(values.endTenancy).toISOString().slice(0, 10)}
                                                                onChange={changeHandler}
                                                                />
                                                
                                                                
                                                            </div>

                                                            <div class="form-group">
                                                                <label forHTML="comment">Comment</label>
                                                                <textarea 
                                                                class="form-control" 
                                                                rows="3"
                                                                id="comment" 
                                                                name="comment" 
                                                                placeholder="Enter End Tenancy"
                                                                value={values.comment}
                                                                onChange={changeHandler}
                                                                ></textarea>
                                                            </div>

                                                        

                                                            {negativeValue(values.monthlyRent) ||
                                                        negativeValue(values.securityGuaranty) ||
                                                        validator.isEmpty(String(values.monthlyRent)) ||
                                                        validator.isEmpty(String(values.securityGuaranty)) ||
                                                        validator.isEmpty(values.tenantName) ||
                                                        validator.isEmpty(values.propertyName)
                                                        ? (<button type="submit" className="btn btn-primary" disabled>{buttonTitle}</button>) :
                                                        (<button type="submit" className="btn btn-primary">{buttonTitle}</button>)

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