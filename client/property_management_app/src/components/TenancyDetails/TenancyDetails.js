import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";


export const TenancyDetails = ({tenancyService}) => {
    const { tenancyId } = useParams();
    const { userId, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [tenancy, setTenancy] = useState({});

    useEffect(() => {
        tenancyService.getTenancyById(tenancyId)
       .then(result => {
            setTenancy(result);
        });
    }, [tenancyId]);

    //const isOwner = property.userId === userId;
    console.log("Tenancy Details");
    console.log(tenancy);

    return(
    <>
    <NavigationMenu />
            <Header />
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">Property Details</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={"#"}>Tenancy Details</Link></li>
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
                                            <h5>Contract number: {tenancy.contractNumber}</h5>
                                        </div>
                                        <div className="card-block">
                                            <p>Security Guaranty: {tenancy.securityGuaranty}</p>
                                            <p>Start Tenancy: {tenancy.startTenancy}</p>
                                            <p>End Tenancy: {tenancy.startTenancy}</p>
                                            <p>Comment: {tenancy.comment}</p>
                                            <Link to={`/tenancy/edit/${tenancy._id}`}><button type="button" class="btn btn-warning" title="Edit" data-toggle="tooltip">Edit</button></Link>
                                            <Link to={`/tenancy/delete/${tenancy._id}`}><button type="button" class="btn btn-danger" title="Delete" data-toggle="tooltip">Delete</button></Link>
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