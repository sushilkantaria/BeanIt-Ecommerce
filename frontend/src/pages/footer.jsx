
import React from 'react';
import './footer.css';
import { useLocation,Link } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';
  
    // Render footer only if not on login or signup page
    if (isLoginOrSignup) {
      return null;
    }
  
  return (
    <footer>
      <div className="footerContainer">
        <div className="stayConnected-class">
          <p>Stay Connected.</p>
        </div>

        <div className="followus-class">
          <p>Follow us on our social media accounts to get <br />even more tastier coffee. </p>
        </div>

        <div className="socialIcon">
          <ul className="footerNavList">
            <li><a href="/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
            <li><a href="/"><i className="fab fa-google-plus"></i></a></li>
          </ul>
        </div>
        
        <div className="footerNav">
          <ul>
            {/* <li><Link to='/terms'></Link>Terms of Use<Link/></li> */}
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/priv_policy">Privacy Policy</Link></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p><span className="designer"> Made with Love &#10084;</span> </p>
      </div>
      
      {/* Paste your CDN link here (not recommended) */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </footer>
  );
}

export default Footer;
