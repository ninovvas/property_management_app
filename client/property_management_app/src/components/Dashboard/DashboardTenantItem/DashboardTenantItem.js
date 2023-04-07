import { Link } from "react-router-dom";

export const DashboardTenantItem = ({
    _id,
    firstName,
    lastName,
    email,
    phone,
    iban,
    bic,
    address,
    tenancies,
}) => {
    return(
        <tr className="unread">
            <td>
                <h6 className="mb-1">{firstName} {lastName}</h6>
                <p className="m-0">{email}</p>
            </td>
            <td>
                {tenancies && tenancies.length > 0 ? (<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>In Tenancy</h6>) :
                (<h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>No Tenancy</h6>)

                }
                
            </td>
            <td><Link to={`/tenant/details/${_id}`} className="btn btn-primary">Details</Link></td>
        </tr>
    );
}