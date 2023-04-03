import { Link } from "react-router-dom";

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
            <h5 className="card-header">Contract Number {contractNumber}</h5>
            <div className="card-body">
                <p className="card-text">Start Tenancy: {startTenancy}</p>
                <p className="card-text">End Tenancy: {endTenancy}</p>
                <Link to={`/tenancy/details/${_id}`} className="btn btn-primary">Details</Link>
            </div>  
        </div>

    );
}