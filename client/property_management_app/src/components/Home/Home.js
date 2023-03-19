import './Home.module.css'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
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
      </>

    );
}