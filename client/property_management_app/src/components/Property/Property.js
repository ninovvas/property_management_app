import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                    <div className="page-header">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Properties</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>Property Items</Link></li>
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
                                            <h5>List all my properties</h5>
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