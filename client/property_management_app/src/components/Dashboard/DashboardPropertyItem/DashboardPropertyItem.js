import { Link } from "react-router-dom";

export const DashboardPropertyItem = ({
    _id,
    street,
    streetNumber,
    country,
    state,
    city,
    objectType,
    objectRelation,
    tenancies
}) => {
    return (
<tr className="unread">
    <td>
        <h6 className="mb-1">{street} {streetNumber}</h6>
        <p className="m-0">{city}</p>
        <p className="m-0">{country}</p>
    </td>
    <td>
        {tenancies && tenancies.length > 0 ? (<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>rented</h6>) :
         (<h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>free</h6>)

        }
        
    </td>
    <td><Link to={`/property/details/${_id}`} className="btn btn-primary">Details</Link></td>
</tr>
    );
}