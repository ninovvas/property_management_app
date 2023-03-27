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
            <h5 className="card-header">{street} {streetNumber}</h5>
            <div className="card-body">
                <p className="card-text">{country}</p>
                <p className="card-text">{state}</p>
                <p className="card-text">{city}</p>
                <p className="card-text">{objectType}</p>
                <p className="card-text">{objectRelation}</p>
                <Link to={`/catalog/${_id}`} className="btn btn-primary">Details</Link>
            </div>  
        </div>

    );
}
