import './Home.Module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, useAuthContext } from '../../contexts/AutoContext';
import { Dashboard } from '../Dashboard/Dashboard';
import { usePropertyContext } from '../../contexts/PropertyContext';

export const Home = ({
  // propertyService,
  // tenantService,
  // tenancyService
}) => {
  //const {isAuthenticated} = useContext(AuthContext);
  const {isAuthenticated} = useAuthContext();
  const {propertyService, tenantService, tenancyService} = usePropertyContext();
  

  const navigate = useNavigate();
    return (
      <>
        {isAuthenticated ? (<Dashboard propertyService={propertyService} tenantService={tenantService} tenancyService={tenancyService}/>):
        (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={"/"}>Property Manager</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <Link to={'/login'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
          <Link to={'/register'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Registration</button></Link>
        </div>
      </nav>
      <main>
      <div className="container">
        <div>
        <h4>Property manager support you to manege your objects and tenancies. To use the Property Manager you have to login or sign up. </h4>
        </div>
        <div className='buttons'>
          <Link to={'/login'}><button className="btn btn-success" type="submit">Login</button></Link>
          <Link to={'/register'}><button className="btn btn-success " type="submit">Registration</button></Link>
        </div>
         
      </div>
            
      </main>
      <footer>
        <p>Property Manager developt by Vasil Ninov</p>
      </footer>
      </>)
    }
  </>
    );
}