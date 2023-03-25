import { useState } from "react";
import validator from "validator";

import "./Object.module.css"

export const Object = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);

    const [errors, setErrors] = useState({
        errObjectType: false,
        errObjectRelation: false,
        errDisabledButton: false
    });

    const isDisabled = (validator.isEmpty(values.objectType) || 
    validator.isEmpty(values.objectRelation) ||
    values.objectType === "ChooseObjectType" ||
    values.objectRelation === "ObjectRelation")
    console.log(isDisabled)


    const submitFormData = (e) => {
        e.preventDefault();
    
         // checking if value of first name and last name is empty show error else take to next step
        
        if (validator.isEmpty(values.objectType) || 
        validator.isEmpty(values.objectRelation) ||
        values.objectType === "ChooseObjectType" ||
        values.objectRelation === "ObjectRelation" 
            ) {
          setError(true);
    
        } else {
          nextStep();
        }
        //nextStep();
      };

    return(
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Object</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <form onSubmit={submitFormData}>
                                                        
                                                    <div className="form-row">
                                                        <div className="col">
                                                                <label label forHtml="country">Your relationship to this object</label>
                                                                <select 
                                                                    className={validator.isEmpty(values.objectRelation) && errors.errObjectRelation ? "form-control is-invalid": "form-control"}
                                                                    id="objectRelation" 
                                                                    name="objectRelation"
                                                                    value={values.objectRelation}
                                                                    onChange={handleFormData("objectRelation")}
                                                                    onBlur={() => setErrors({...errors, errObjectRelation:true})}
                                                                    >
                                                                        <option value="chooseObjectRelation" key="chooseObjectRelation">--Choose Type of Relation--</option>
                                                                        <option value="Owner" key="owner">Owner</option>
                                                                        <option value="PropertyManager" key="PropertyManager">Property manager</option>    
                                                                </select>
                                                                {validator.isEmpty(values.objectRelation) && errors.errObjectRelation ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                        <div className="col">
                                                                <label label forHtml="country">Choose the type of the object</label>
                                                                <select 
                                                                    className={validator.isEmpty(values.objectType) && errors.errObjectType ? "form-control is-invalid": "form-control"}
                                                                    id="objectType" 
                                                                    name="objectType"
                                                                    value={values.objectType}
                                                                    onChange={handleFormData("objectType")}
                                                                    onBlur={() => setErrors({...errors, errObjectType:true})}
                                                                    >
                                                                        <option value="ChooseObjectType" key="chooseObjectType">--Choose Object Type --</option>
                                                                        <option value="Flat" key="flat">Flat</option>
                                                                        <option value="House" key="house">House</option>
                                                                        <option value="CommercialProperty" key="commercialProperty">Commercial Property</option>
                                                                        <option value="Garage" key="garage">Garage/Parking space</option>
                                                                        <option value="Others" key="others">Others</option>    
                                                                </select>
                                                                {validator.isEmpty(values.objectType) && errors.errObjectType ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                            </div>
                                                        </div>

                                                        
                                                        <button variant="primary" className="btn btn-primary" onClick={prevStep}>Back to Address</button>
                                                        {
                                                            validator.isEmpty(values.objectType) || 
                                                            validator.isEmpty(values.objectRelation) ||
                                                            values.objectType === "ChooseObjectType" ||
                                                            values.objectRelation === "ObjectRelation" ?
                                                            ( <button variant="primary" type="submit" className="btn btn-primary" disabled={true} >Continue to Summary Object</button>):
                                                            <button variant="primary" type="submit" className="btn btn-primary" disabled={false}>Continue to Summary Object</button>
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

    );
}