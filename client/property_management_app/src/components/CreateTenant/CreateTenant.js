import { useNavigate } from "react-router-dom";

export const CreateTenant = () => {

    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        iban: '',
        bic: '',
        address: '', 
        userId: userId
    }, onRegisterSubmit);
    
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
                                            <h5 className="m-b-10">Create Tenant</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>XXXXX</Link></li>
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
                                                <Link to={`/property/edit/${property._id}`}><button type="button" class="btn btn-warning" title="Edit" data-toggle="tooltip">Edit</button></Link>
                                                <Link to={`/property/delete/${property._id}`}><button type="button" class="btn btn-danger" title="Delete" data-toggle="tooltip">Delete</button></Link>
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