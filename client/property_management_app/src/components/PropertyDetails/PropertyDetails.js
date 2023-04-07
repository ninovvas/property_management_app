import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";


export const PropertyDetails = ({propertyService}) => {
    const { propertyId } = useParams();
    const { userId, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [property, setProperty] = useState({});

    useEffect(() => {
        propertyService.getPropertyById(propertyId)
       .then(result => {
            setProperty(result);
        });
    }, [propertyId]);

    // const isOwner = property.userId === userId;

    const onDeleteClick = async () => {
        await propertyService.deleteProperty(propertyId);

        setProperty({});

        navigate('/property');
    };

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
                                        <h5 className="m-b-10">Property Details</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={"#"}>Property Details</Link></li>
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
                                            <h5>Street: {property.street}</h5>
                                        </div>
                                        <div className="card-block">
                                            <p>City: {property.city}</p>
                                            <Link to={`/property/edit/${property._id}`}><button type="button" className="btn btn-warning" title="Edit" data-toggle="tooltip">Edit</button></Link>
                                            {property.tenancies && property.tenancies.length === 0 ? (<button type="button" className="btn btn-danger" title="Delete" data-toggle="tooltip" onClick={onDeleteClick}>Delete</button>): ""}
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