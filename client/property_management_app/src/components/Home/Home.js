import './Home.module.css'
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
            <a className="navbar-brand" href="#">Property Management</a>
       
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <Link to={'/login'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
          <Link to={'/register'}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Registration</button></Link>
        </div>
      </nav>
      <main>
        <div class="box_home">

        </div>
      </main>
      <footer>
        <p>Thsi is only a test</p>
      </footer>
      </>)
    }
  </>
    );
}