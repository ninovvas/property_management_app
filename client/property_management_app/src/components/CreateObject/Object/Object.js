import { useState } from "react";
import validator from "validator";

export const Object = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);


    const submitFormData = (e) => {
        e.preventDefault();
    
         // checking if value of first name and last name is empty show error else take to next step
        if (validator.isEmpty(values.residentialUnits) || 
            validator.isEmpty(values.commercialProperties) ||
            validator.isEmpty(values.garages) ||
            validator.isEmpty(values.others) ||
            validator.isEmpty(values.objectType) ) { 
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
                                                                    className={validator.isEmpty(values.objectType) ? "form-control is-invalid": "form-control"}
                                                                    id="objectType" 
                                                                    name="objectType"
                                                                    value={values.objectType}
                                                                    onChange={handleFormData("objectType")}
                                                                    >
                                                                        <option value="ChooseObjectType" key="chooseObjectType">--Choose Object Type--</option>
                                                                        <option value="Owner" key="owner">Owner</option>
                                                                        <option value="PropertyManager" key="PropertyManager">Property manager</option>    
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                           
                                                            <div className="col">
                                                                <label for="residentialUnits">Residential units</label>
                                                                <input 
                                                                type="number" 
                                                                className= "form-control"
                                                                name="residentialUnits" 
                                                                id="residentialUnits" 
                                                                placeholder="Residential Units"
                                                                value={values.residentialUnits}
                                                                onChange={handleFormData("residentialUnits")} />
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="commercialProperties">Commercial properties</label>
                                                                <input type="number" 
                                                                className="form-control" 
                                                                name="commercialProperties" 
                                                                id="commercialProperties" 
                                                                placeholder="Commercial Properties"
                                                                value={values.commercialProperties}
                                                                onChange={handleFormData("commercialProperties")} />
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="garages">Garages/Parking spaces</label>
                                                                <input 
                                                                type="number" 
                                                                className="form-control"
                                                                name="garages" 
                                                                id="garages" 
                                                                placeholder="Garages/Parking spaces" 
                                                                value={values.garages}
                                                                onChange={handleFormData("garages")}/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="others">Others</label>
                                                                <input 
                                                                type="number" 
                                                                className="form-control"
                                                                name="others" 
                                                                id="others" 
                                                                placeholder="Others" 
                                                                value={values.others}
                                                                onChange={handleFormData("others")}/>
                                                            </div>
                                                        </div>
                                                        
                                                        

                                                        
                                                        <button variant="primary" className="btn btn-primary" onClick={prevStep}>Previous</button>
                                                        <button variant="primary" type="submit"  className="btn btn-primary">Continue</button>
                                                            
                                                        
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