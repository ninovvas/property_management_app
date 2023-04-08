import { useEffect, useState } from "react";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { DashboardPropertyItem } from "./DashboardPropertyItem/DashboardPropertyItem";
import { DashboardTenancyItem } from "./DashboardTenancyItem/DashboardTenancyItem";
import { DashboardTenantItem } from "./DashboardTenantItem/DashboardTenantItem";

import "./Dashboard.Module.css"

export const Dashboard = ({
    // propertyService,
    // tenantService,
    // tenancyService
}) => {

    const {propertyService, tenantService, tenancyService } = usePropertyContext();

    const [properties, setProperties] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [tenancies, setTenancies] = useState([]);

    useEffect(() => {
        propertyService.getAllProperties()
            .then(result => {
              setProperties(result)
            });
        tenantService.getAllTenants()
        .then(result => {
            setTenants(result)
        });
        tenancyService.getAllTenancies()
        .then(result => {
            setTenancies(result)
        })
        }, []);

        
        // let totalMonthlyRent = Number(0);
        // totalMonthlyRent =  Number(tenancies.map(t => t + Number(t.monthlyRent)));

        const totalMonthlyRent = tenancies.reduce((accumulator, current) => {
            return accumulator + current.monthlyRent;
          }, 0);


    return (
        <>
      
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    

                    <div className="main-body">
                        <div className="page-wrapper">
                          
                            <div className="row">

                                <div className="col-md-6 col-xl-3">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <h6 className="mb-4">Total Monthly Rent</h6>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-9">
                                                    <h3 className="f-w-150 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ {totalMonthlyRent}</h3>
                                                </div>

            
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-xl-3">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <h6 className="mb-4">Total Number of Properties</h6>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-9">
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-check-square text-c-green f-30 m-r-10"></i> {properties && properties.length > 0 ? (properties.length) : ("0")}</h3>
                                                </div>

            
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-xl-3">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <h6 className="mb-4">Total Number of Tenants</h6>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-9">
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-user-check f-30 text-c-blue"></i> {tenants && tenants.length > 0 ? (tenants.length) : ("0")}</h3>
                                                </div>

            
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-xl-3">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <h6 className="mb-4">Total Number of Tenancies</h6>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-9">
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i class="feather icon-activity f-30 text-c-green"></i> {tenancies && tenancies.length > 0 ? (tenancies.length) : ("0")}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="col-xl-8 col-md-6">
                                    <div className="card Recent-Users">
                                        <div className="card-header">
                                            <h5>Recent Properties</h5>
                                        </div>
                                        <div className="card-block px-0 py-3">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <tbody>
                                                    {properties.map(p =>
                                                    <DashboardPropertyItem key={p._id} {...p} />
                                                        )}

                                                        {properties.length === 0 && (
                                                            <h3 className="no-articles no_content">No properties yet</h3>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-8 col-md-6">
                                    <div className="card Recent-Users">
                                        <div className="card-header">
                                            <h5>Recent Tenants</h5>
                                        </div>
                                        <div className="card-block px-0 py-3">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <tbody>
                                                    {tenants.map(t =>
                                                    <DashboardTenantItem key={t._id} {...t} />
                                                        )}

                                                        {tenants.length === 0 && (
                                                            <h3 className="no-articles no_content">No tenants yet</h3>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-8 col-md-6">
                                    <div className="card Recent-Users">
                                        <div className="card-header">
                                            <h5>Recent Tenancies</h5>
                                        </div>
                                        <div className="card-block px-0 py-3">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <tbody>
                                                    {tenancies.map(t =>
                                                    <DashboardTenancyItem key={t._id} {...t} />
                                                        )}

                                                        {tenancies.length === 0 && (
                                                            <h3 className="no-articles no_content">No tenants yet</h3>
                                                        )}
                                                    </tbody>
                                                </table>
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