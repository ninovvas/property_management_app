
//import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AutoContext";
import { usePropertyContext } from "../../../contexts/PropertyContext";


export const ObjectConfirm = ({prevStep, values, titleButton, action, titles}) => {
    
    //const { onCreatePropertySubmit, onEditPropertySubmit } = useContext(AuthContext);

    const {onCreatePropertySubmit, onEditPropertySubmit } = usePropertyContext();
  


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
                <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">{titles.h5Title}</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={"/property"}>My Properties</Link></li>
                                        {action === "edit" ? (<li className="breadcrumb-item"><Link to={`/property/details/${values._id}`}>{titles.detailTitle}</Link></li>) : 
                                        ("")}
                                        <li className="breadcrumb-item"><Link to={"#"}>{titles.currentTitle}</Link></li>
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