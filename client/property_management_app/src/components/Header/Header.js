import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";

export const Header = () => {
    const { firstName, lastName } = useContext(AuthContext);

    return (
    <header className="navbar pcoded-header navbar-expand-lg navbar-light">
        <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
            <a href="index.html" className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">Datta Able</span>
               </a>
        </div>
        <a className="mobile-menu" id="mobile-header" href="javascript:">
            <i className="feather icon-more-horizontal"></i>
        </a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li><a href="javascript:" className="full-screen" onClick="javascript:toggleFullScreen()"><i className="feather icon-maximize"></i></a></li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="javascript:">Action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Another action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="main-search">
                        <div className="input-group">
                            <input type="text" id="m-search" className="form-control" placeholder="Search . . ." />
                            <a href="javascript:" className="input-group-append search-close">
                                <i className="feather icon-x input-group-text"></i>
                            </a>
                            <span className="input-group-append search-btn btn btn-primary">
                                <i className="feather icon-search input-group-text"></i>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                
                <li>
                    <div className="dropdown drp-user">
                        <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon feather icon-settings"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <div className="pro-head">
                                <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                                <span>{firstName} {lastName}</span>
                                <Link to={'/logout'} className="dud-logout" title="Logout">
                                    <i className="feather icon-log-out"></i>
                                </Link>
                            </div>
                            <ul className="pro-body">
                                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                                <li><Link to={"/profile"} className="dropdown-item"><i className="feather icon-user"></i> Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
    
    );
}