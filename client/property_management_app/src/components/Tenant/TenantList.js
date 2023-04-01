import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { TenantItem } from "./TenantItem/TenantItem";

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
         <NavigationMenu />
            <Header />
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Summary Tenants</h5>
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



