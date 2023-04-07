import { Link } from "react-router-dom";

export const DashboardTenancyItem = ({
    _id,
    contractNumber,
    monthlyRent,
    securityGuaranty,
    startTenancy,
    endTenancy,
    comment,
    propertyId,
    tenantId
}) => {
    console.log("propertyId");
    console.log(propertyId);
    return (
<tr className="unread">
    <td>
        <h6 className="mb-1">Contract Number: {contractNumber}</h6>
        <p className="m-0">Monthly Rent{monthlyRent}</p>
    </td>
    <td>
        {propertyId ? (<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Property: {propertyId.street} {propertyId.streetNumber}</h6>):
         (<h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>No Property</h6>)

        }
        
    </td>
    <td>
        {tenantId ? (<h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Tenant: {tenantId.firstName}  {tenantId.lastName}</h6>):
         (<h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>No Tenant</h6>)

        }
        
    </td>
    <td><Link to={`/tenancy/details/${_id}`} className="btn btn-primary">Details</Link></td>
</tr>
    );
}