import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AutoContext";

import "./Header.Module.css"

export const Header = () => {
    //const { firstName, lastName, userId } = useContext(AuthContext);
    const { firstName, lastName, userId } = useAuthContext();

    return (
    <header className="navbar pcoded-header navbar-expand-lg navbar-light">
        <div className="m-header">
            <Link className="mobile-menu" id="mobile-collapse1" to={"javascript:"}><span></span></Link>
            <Link to={"/"} className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">Property Manager</span>
               </Link>
        </div>
        <Link className="mobile-menu" id="mobile-header" to={"javascript:"}>
            <i className="feather icon-more-horizontal"></i>
        </Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li><Link href={"javascript:"} className="full-screen" onClick="javascript:toggleFullScreen()"><i className="feather icon-maximize"></i></Link></li>
                <li className="nav-item dropdown">
                    <Link className="dropdown-toggle" to={"javascript:"} data-toggle="dropdown">Actions</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={"/create_property"}> <i className="feather icon-trending-up"></i> Create Property</Link></li>
                        <li><Link className="dropdown-item" to={"/create_tenant"}><i className="feather icon-user-plus"></i>Create Tenant</Link></li>
                        <li><Link className="dropdown-item" to={"/create_tenancy"}><i className="feather icon-plus-square"></i>Create Tenancy</Link></li>
                    </ul>
                </li>
               
            </ul>
            <ul className="navbar-nav ml-auto">
                
                <li>
                    <div className="dropdown drp-user">
                        <Link to={"#"} className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon feather icon-settings"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <div className="pro-head">
                            <i className="feather icon-user f-30 text-c-white distance"></i>
                                <span>{firstName} {lastName}</span>
                                <Link to={'/logout'} className="dud-logout" title="Logout">
                                    <i className="feather icon-log-out"></i>
                                </Link>
                            </div>
                            <ul className="pro-body">
                                <li><Link to={"/profile"} className="dropdown-item"><i className="feather icon-user"></i> Profile</Link></li>
                                <li><Link to={`/profile/edit/${userId}`} className="dropdown-item"><i className="feather icon-settings"></i> Edit Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
    
    );
}