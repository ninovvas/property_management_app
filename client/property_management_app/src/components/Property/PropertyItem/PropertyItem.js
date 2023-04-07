import { Link } from "react-router-dom";

export const PropertyItem = ({
    _id,
    street,
    streetNumber,
    country,
    state,
    city,
    objectType,
    objectRelation

}) =>{
    return(
        <div className="card">
            <h5 className="card-header">{street}. {streetNumber}</h5>
            <div className="card-body">
                <p className="card-text"><span className="title">Country:</span> {city} ({country})</p>
                <p className="card-text"><span className="title">Object Type:</span> {objectType}</p>
                <Link to={`/property/details/${_id}`} className="btn btn-primary">Details</Link>
            </div>  
        </div>

    );
}
