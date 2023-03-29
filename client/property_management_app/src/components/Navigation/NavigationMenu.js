import { Link } from "react-router-dom";
export const NavigationMenu = () => {
    return (
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                   <a href="index.html" className="b-brand">
                       <div className="b-bg">
                           <i className="feather icon-trending-up"></i>
                       </div>
                       <span className="b-title">Property Management</span>
                   </a>
                   <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
               </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Administration</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/dashboard"} className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                        </li>

                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/create_property"} className="nav-link "><span className="pcoded-micon"><i className="fas fa-plus-circle"></i></span><span className="pcoded-mtext">Create Property</span></Link>
                        </li>

                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to={"/property"} className="nav-link "><span className="pcoded-micon"><i className="fas fa-list"></i></span><span className="pcoded-mtext">My Properties</span></Link>
                        </li>
                    </ul>

                       
                </div>
            </div>
        </nav>
    );
}