import './footer.component.css';
import Logo from '../../assets/Logo.png'

function FooterComponent(){
    return(
<footer className="footer-footer-container">
  <section className="footer-section-container">
    <div className="section-container">
      <nav className="footer-footer-nav">
        <ul className="nav-container">
          <li className="footer-nav-menu-item"><a className="menu-item-button" href="">About Discover Street</a></li>
          <li className="footer-nav-menu-item"><a className="menu-item-button" href="">Learning Center</a></li>
          <li className="footer-nav-menu-item"><a className="menu-item-button" href="">Find A Truck</a></li>
        </ul>
      </nav>
    </div>
  </section>
  <section className="footer-section-container">
    <div className="section-container">
      <img
      className="footer-footer-image-logo"
      alt="Discover Street Logo"
      src={Logo}
    />
   <span className="footer-footer-copyright"
      >© Discover Street. All rights reserved.</span
    >
    </div>
  </section>
  <section className="footer-section-container">
    <div className="section-container">
      <span className="footer-heading">Follow Us</span>
      <ul className="follow-us-container">
        <li className="follow-us-menu-item"><i className="menu-item-icon fa fa-facebook fa-3x"></i></li>
        <li className="follow-us-menu-item"><i className="menu-item-icon fa fa-instagram fa-3x"></i></li>
        <li className="follow-us-menu-item"><i className="menu-item-icon fa fa-twitter fa-3x"></i></li>
        <li className="follow-us-menu-item"><i className="menu-item-icon fa fa-vinmeo fa-3x"></i></li>
        <li className="follow-us-menu-item"><i className="menu-item-icon fa fa-youtube fa-3x"></i></li>
        <li className="follow-us-menu-item"><i className="menu-item-icon fa fa-snapchat fa-3x"></i></li>
      </ul>
    <address>
       123 67 ST NE<br/>
       Suite #62<br/>
       New York, New York
    </address>
    <a href="tel:+15556063891" className="footer-telephone">555-606-3891</a>
    </div>
  </section>
    </footer>
    )
}

export default FooterComponent