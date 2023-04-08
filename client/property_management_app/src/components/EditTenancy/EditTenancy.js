import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AutoContext";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { formatDate } from "../../utils/formatData";
import validator from "validator";
import { negativeValue } from "../../utils/negativeValue";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const EditTenancy = ({
    // tenantService,
    // propertyService,
    // tenancyService

}) => {


   
    const {tenancyService, tenantService,propertyService, onTenancyEditSubmit} = usePropertyContext();
    //const {userId, onTenancyEditSubmit} = useContext(AuthContext);
    const {userId } = useAuthContext();
    const { tenancyId } = useParams();
    //const navigate = useNavigate();

    const buttonTitle="Edit Tenancy"

    const [tenants, setTenants] = useState([]);
    const [properties, setProperties] = useState([]);

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: tenancyId,
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
    }, onTenancyEditSubmit);

    useEffect(() => {
        tenancyService.getTenancyById(tenancyId)
            .then(result => {
                changeValues(result);
                //state => ({...state, [e.target.name]: e.target.value})
                //console.log(formData);
            });
    }, [tenancyId]);



   

    // console.log("EditTenancy");
    // console.log(values);
    // console.log(typeof(values.startTenancy)); 
    // console.log(formatDate(values.startTenancy));
    // console.log("values.tenantName", values.tenantName);
    // console.log("values.propertyName", values.propertyName);
    //console.log(typeof(values.startTenancy));
    //console.log(values.startTenancy);

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
                                            <h5 className="m-b-10">Edit Tenancy</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"/tenancies"}>My Tenancies</Link></li>
                                            <li className="breadcrumb-item"><Link to={`/tenancy/details/${tenancyId}`}>Details Tenancy</Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>Edit Tenancy</Link></li>
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
                                                <h5>Edit Tenancy</h5>
                                            </div>
                                            <div className="card-body">
                                                
                                                <div className="row">
                                                    <div className="col-md-6">
                                                    <form method="post" onSubmit={onSubmit}>


                                                            <div className="form-group">
                                                                <label forHtml="tenantName">Tenant</label>
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="tenantName" 
                                                                name="tenantName" 
                                                                placeholder="Tenant"
                                                                value={values.tenantName = `${values.tenantId.firstName}, ${values.tenantId.lastName}`}
                                                                onChange={changeHandler}
                                                                disabled
                                                                />
                                                                
                                                            </div>

                                                            
                                                            <div className="form-group">
                                                                <label forHtml="propertyName">Property</label>
                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="propertyName" 
                                                                name="propertyName" 
                                                                placeholder="Tenant"
                                                                    value={values.propertyName = `${values.propertyId.street}, ${values.propertyId.streetNumber}, ${values.propertyId.city},  ${values.propertyId.country}`}
                                                                onChange={changeHandler}
                                                                disabled
                                                                />
                                                                
                                                            </div>

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
                                                                className="form-control" 
                                                                id="startTenancy" 
                                                                name="startTenancy" 
                                                                placeholder="Enter start Tenancy"
                                                                value={formatDate(values.startTenancy)}
                                                                onChange={changeHandler}
                                                                />
                                                                
                                                            </div>

                                                            <div className="form-group">
                                                                <label forHtml="endTenancy">End Tenancy</label>
                                                                <input 
                                                                type="date" 
                                                                className="form-control" 
                                                                id="endTenancy" 
                                                                name="endTenancy" 
                                                                placeholder="Enter End Tenancy"
                                                                value={formatDate(values.endTenancy)}
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