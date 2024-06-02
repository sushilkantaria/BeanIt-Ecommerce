import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import home from '../images/home.png'
import logo from '../images/logo.png'
import './navbar.css'; 

const NavigationBar = () => {
  const location = useLocation();
  const ishome=location.pathname==='/' || location.pathname==="/origin";

  if(ishome){
    return null
  }
  return (
    <div className='navstyle'>
    <nav className="nav1">
            <div className="logo-container">
                <img src={logo} alt="bean it logo" />
            </div>
        </nav>

    <nav className="navbar">
      <Link to="/" className="nav-item">
        <img className='home' src={home} alt="home icon" height='35' />
      </Link>


      <div className='dropdown'>
          <button className={`dropbtn ${location.pathname === '/All' ? 'active' : ''}`}>
            <Link to="/All" className={`nav-item all-button ${location.pathname === '/All' ? 'active' : ''}`}>All</Link>
          </button> 
        </div>

      <div className="dropdown">
        <button className="dropbtn">Roast</button>
        <div className="dropdown-content">
          <Link to="/light-roast">Light Roast</Link>
          <Link to="/medium-roast">Medium Roast</Link>
          <Link to="/dark-roast">Dark Roast</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Flavour</button>
        <div className="dropdown-content">
          <Link to="/latte">Latte</Link>
          <Link to="/mocha">Mocha</Link>
          <Link to="/americano">Americano</Link>
          <Link to="/espresso">Espresso</Link>
          <Link to="/cappuccino">Cappuccino</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Beans</button>
        <div className="dropdown-content">
          <Link to="/robusta">Robusta</Link>
          <Link to="/liberica">Liberica</Link>
          <Link to="/excelsa">Excelsa</Link>
          <Link to="/arabica">Arabica</Link>
        </div>
      </div>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :      <Link to="/login" className="nav-item"><button>Login</button></Link>
    }
            </div> 
    </nav>
    </div>
  );
}

export default NavigationBar;