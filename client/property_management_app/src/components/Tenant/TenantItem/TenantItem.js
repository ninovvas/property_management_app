import { Link } from "react-router-dom";

export const TenantItem = ({
    _id,
    firstName,
    lastName,
    email,
    phone,
    iban,
    bic,
    address, 

}) =>{
    return(
        <div className="card">
            <h5 className="card-header">{firstName} {lastName}</h5>
            <div className="card-body">
                <p className="card-text">Email: {email}</p>
                <Link to={`/tenant/details/${_id}`} className="btn btn-primary">Details</Link>
            </div>  
        </div>

    );
}