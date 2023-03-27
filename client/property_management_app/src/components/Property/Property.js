import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { PropertyItem } from "./PropertyItem/PropertyItem";

export const Property = ({propertyService}) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        propertyService.getAllProperties()
            .then(result => {
              setProperties(result)
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
                                            <h5>Summary Create Object</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                {properties.map(p =>
                                                    <PropertyItem key={p._id} {...p} />
                                                )}

                                                {properties.length === 0 && (
                                                    <h3 className="no-articles">No articles yet</h3>
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