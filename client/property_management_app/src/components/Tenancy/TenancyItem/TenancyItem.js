import { Link } from "react-router-dom";

import "./TenancyItem.Module.css"

export const TenancyItem = ({
    _id,
    contractNumber,
    securityGuaranty,
    startTenancy,
    endTenancy,
    comment,
   
}) =>{
    return(
        <div className="card">
            <h5 className="card-header"><i className="feather icon-file distance-right"></i>Contract Number <i className="feather icon-arrow-right distance-right"></i> {contractNumber}</h5>
            <div className="card-body">
            <p className="card-text"><i className="feather icon-calendar distance-right"></i><span className="title">Start Tenancy:</span> {startTenancy}</p>
                <p className="card-text"><i className="feather icon-calendar distance-right"></i><span className="title">End Tenancy:</span> {endTenancy}</p>
                <Link to={`/tenancy/details/${_id}`} className="btn btn-primary">Details</Link>
            </div>  
        </div>

    );
}