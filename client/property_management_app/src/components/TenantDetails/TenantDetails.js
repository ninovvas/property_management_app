import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";


export const TenantDetails = ({tenantService}) => {
    const { tenantId } = useParams();
    const { userId, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [tenant, setTenant] = useState({});

    useEffect(() => {
        tenantService.getTenantById(tenantId)
       .then(result => {
            setTenant(result);
        });
    }, [tenantId]);

    //const isOwner = property.userId === userId;

    const onDeleteClick = async () => {
        await tenantService.deleteTenant(tenantId);

        setTenant({});
        // TODO: delete from state

        navigate('/tenants');
    };

    console.log(tenant);
   

    return(
    <>
  
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">Tenant Details</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={"/tenants"}>My Tenants</Link></li>
                                        <li className="breadcrumb-item"><Link to={"#"}>Tenant Details</Link></li>
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
                                        <div className="card-header">
                                            <h5>{tenant.firstName}, {tenant.lastName}</h5>
                                        </div>
                                        <div className="card-block">
                                        <p className="card-text"><i className="feather icon-mail distance-right"></i><span className="title">Email:</span> {tenant.email}</p>
                                        <p className="card-text"><i className="feather icon-phone distance-right"></i><span className="title">Phone Number:</span> {tenant.phone}</p>
                                        <p className="card-text"><i className="feather icon-map distance-right"></i><span className="title">Address:</span> {tenant.address}</p>
                                        <p className="card-text"><i className="feather icon-layers distance-right"></i><span className="title">IBAN:</span> {tenant.iban ? (tenant.iban) : ("no available")}</p>
                                        <p className="card-text"><i className="feather icon-cast distance-right"></i><span className="title">BIC/SWIFT:</span> {tenant.bic ? (tenant.bic) : ("no available")}</p>
                                        <Link to={`/tenant/edit/${tenant._id}`}><button type="button" class="btn btn-warning" title="Edit" data-toggle="tooltip">Edit</button></Link> 
                                            {tenant.tenancies && tenant.tenancies.length === 0 ? ( <button type="button" class="btn btn-danger" title="Delete" data-toggle="tooltip" onClick={onDeleteClick}>Delete</button>) : ""}
                                           
                                            
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
    </>

    );
}