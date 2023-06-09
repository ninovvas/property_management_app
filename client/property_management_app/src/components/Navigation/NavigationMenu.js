import { Link } from "react-router-dom";
export const NavigationMenu = () => {
    return (
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                   <Link to={"/"} className="b-brand">
                       <div className="b-bg">
                           <i className="feather icon-trending-up"></i>
                       </div>
                       <span className="b-title">Property Manager</span>
                   </Link>
                   <Link className="mobile-menu" id="mobile-collapse" to={"javascript:"}><span></span></Link>
               </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Administration</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/dashboard"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Property</label>
                        </li>

                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/property"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-trending-up"></i></span><span className="pcoded-mtext">My Properties</span></Link>
                        </li>

                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/create_property"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-plus-square"></i></span><span className="pcoded-mtext">Create Property</span></Link>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Tenant</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/tenants"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-users"></i></span><span className="pcoded-mtext">My Tenants</span></Link>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/create_tenant"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-user-plus"></i></span><span className="pcoded-mtext">Create Tenant</span></Link>
                        </li>
                       
                        <li className="nav-item pcoded-menu-caption">
                            <label>Tenancy</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/tenancy"} className="nav-link "><span className="pcoded-micon"><i className="fas fa-list"></i></span><span className="pcoded-mtext">My Tenancies</span></Link>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/create_tenancy"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-plus"></i></span><span className="pcoded-mtext">Create Tenancy</span></Link>
                        </li>
                        
                    </ul>

                       
                </div>
            </div>
        </nav>
    );
}