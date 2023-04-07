import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { TenantItem } from "./TenantItem/TenantItem";
import { Link } from "react-router-dom";

export const TenantList = ({tenantService}) => {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        tenantService.getAllTenants()
            .then(result => {
                setTenants(result)
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
                                            <h5 className="m-b-10">Tenants</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"/tenants"}>My Tenants</Link></li>
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
                                            <h5>List all my Tenants</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                {tenants.map(t =>
                                                    <TenantItem key={t._id} {...t} />
                                                )}

                                                {tenants.length === 0 && (
                                                    <h3 className="no-articles">No tenants yet</h3>
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



