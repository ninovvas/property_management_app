import { useEffect, useState } from "react";
import { TenancyItem } from "./TenancyItem/TenancyItem";
import { Link } from "react-router-dom";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const TenancyList = ({
    // tenancyService
}) => {
    const {tenancyService} = usePropertyContext();
    
    const [tenancies, setTenancies] = useState([]);

    useEffect(() => {
        tenancyService.getAllTenancies()
            .then(result => {
                setTenancies(result)
            })
        }, []);
    return ( 
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
                                        <h5 className="m-b-10">Tenancies</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={"#"}>My Tenancies</Link></li>
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
                                        <div className="card-body">
                                            <div className="card-header">
                                                <h5>List my Tenancies</h5>
                                            </div>
                                            <div className="row distance">
                                                <div className="col-md-6">
                                                {tenancies.map(t =>
                                                    <TenancyItem key={t._id} {...t} />
                                                )}

                                                {tenancies.length === 0 && (
                                                    <h3 className="no-articles">No tenancies yet</h3>
                                                )}
                                                        


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
            </div>
        </div>
        </>
    );
}
