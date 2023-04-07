import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { TenancyItem } from "./TenancyItem/TenancyItem";

export const TenancyList = ({tenancyService}) => {
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
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Summary Tenants</h5>
                                            <div className="row">
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
