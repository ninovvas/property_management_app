
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../../contexts/AutoContext";



import * as propertyService from "../../../services/propertyService";

export const ObjectConfirm = ({prevStep, values, onCreatePropertySubmit}) => {
   
    const navigate = useNavigate();


    const submitFormData = (e) => {
       
        // e.preventDefault();

        
        // propertyService.createObject(values)
        // .then(propertyData => {
        //     console.log(propertyData);
        //     navigate("/dashboard");
        // })

        onCreatePropertySubmit()

    
    
         // checking if value of first name and last name is empty show error else take to next step
        
        // if (validator.isEmpty(values.objectType) || 
        //     values.commercialProperties === 0 ||
        //     values.garages === 0 ||
        //     values.others === 0 ||
        //     values.residentialUnits === 0 ) {
        //   setError(true);
    
        // } else {
        //   nextStep();
        // }
        //nextStep();

        // street
        // streetNumber
        // country
        // state
        // city
        // objectRelation
        // objectType
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
                                            <h5>Summary Create Object</h5>
                                            <div className="row">
                                                <div className="col-md-6">

                                               

                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th>Street</th>
                                                                <td>{values.street}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Street Number</th>
                                                                <td>{values.streetNumber}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Country</th>
                                                                <td>{values.country}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>State</th>
                                                                <td>{values.state}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>City</th>
                                                                <td>{values.city}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Object Relation</th>
                                                                <td>{values.objectRelation}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Object Type</th>
                                                                <td>{values.objectType}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <form method="POST" onSubmit={submitFormData}>
                                                    
                                                        <button variant="primary" className="btn btn-primary" onClick={prevStep}>Back to Object</button>
                                                        <button variant="primary" type="submit"  className="btn btn-success">Create Object</button>
                                                            
                                                        
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

    )
}