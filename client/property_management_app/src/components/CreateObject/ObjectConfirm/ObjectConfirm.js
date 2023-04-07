
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AutoContext";


export const ObjectConfirm = ({prevStep, values, titleButton, action}) => {
    
    const { onCreatePropertySubmit, onEditPropertySubmit } = useContext(AuthContext);
  


    const submitFormData = (e) => {
       
        e.preventDefault();

        if (action === "create") {
            onCreatePropertySubmit(values);
        }

        if (action === "edit") {
            onEditPropertySubmit(values);
        }

    
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
                                                        <button variant="primary" type="submit"  className="btn btn-success">{titleButton}</button>
                                                            
                                                        
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