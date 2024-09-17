import React from 'react';
import logo2 from './images/logo2.png';
import logoNalsa from './images/logo_nalsa.png';

function Footer() {
  return (
    <div className="footer-container mt-5">
      <h1 className="text-center p-5">Lawyers in India</h1>
      <div className="row mt-4">
        <div className="col-md-4 ">
          <h2>Divorce Lawyers</h2>
          <ul className="list-unstyled">
            <li><a href="/" className="footer-link">Property Lawyers</a></li>
            <li><a href="/" className="footer-link">Civil Lawyers</a></li>
            <li><a href="/" className="footer-link">Criminal Lawyers</a></li>
            <li><a href="/" className="footer-link">Family Lawyers</a></li>
            <li><a href="/" className="footer-link">Cheque Bounce Lawyers</a></li>
            <li><a href="/" className="footer-link">Labour and Service Lawyers</a></li>
            <li><a href="/" className="footer-link">Consumer Court</a></li>
            <li><a href="/" className="footer-link">Motor Accident Lawyers</a></li>
            <li><a href="/" className="footer-link">Supreme Court Lawyers</a></li>
          </ul>
          <a href="/" className="btn btn-primary">VIEW All</a>
        </div>
        <div className="col-md-4">
          <h2>Lawyers in Cities</h2>
          <ul className="list-unstyled">
            <li><a href="/" className="footer-link">Lawyers in Delhi</a></li>
            <li><a href="/" className="footer-link">Lawyers in Bangalore</a></li>
            <li><a href="/" className="footer-link">Lawyers in Mumbai</a></li>
            <li><a href="/" className="footer-link">Lawyers in Chennai</a></li>
            <li><a href="/" className="footer-link">Lawyers in Gurgaon</a></li>
            <li><a href="/" className="footer-link">Lawyers in Noida</a></li>
            <li><a href="/" className="footer-link">Lawyers in Jaipur</a></li>
            <li><a href="/" className="footer-link">Lawyers in Chandigarh</a></li>
            <li><a href="/" className="footer-link">Lawyers in Pune</a></li>
            <li><a href="/" className="footer-link">Lawyers in Nagpur</a></li>
          </ul>
          <a href="/" className="btn btn-primary">VIEW All</a>
        </div>
        <div className="col-md-4">
          <h2>Legal Advice</h2>
          <ul className="list-unstyled">
            <li><a href="/" className="footer-link">Divorce Legal Advice</a></li>
            <li><a href="/" className="footer-link">Property Legal Advice</a></li>
            <li><a href="/" className="footer-link">Criminal Legal Advice</a></li>
            <li><a href="/" className="footer-link">Recovery Legal Advice</a></li>
            <li><a href="/" className="footer-link">Consumer Legal Advice</a></li>
            <li><a href="/" className="footer-link">Cheque Bounce Legal Advice</a></li>
            <li><a href="/" className="footer-link">Indian Kanoon</a></li>
            <li><a href="/" className="footer-link">Legal Forms</a></li>
            <li><a href="/" className="footer-link">Legal Help Center</a></li>
            <li><a href="/" className="footer-link">Posh Training</a></li>
          </ul>
          <a href="/" className="btn btn-primary">VIEW All</a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <h2>Law Guides</h2>
          <ul className="list-unstyled">
            <li><a href="/" className="footer-link">BNS Sections</a></li>
            <li><a href="/" className="footer-link">Law Videos</a></li>
            <li><a href="/" className="footer-link">IPC Sections</a></li>
            <li><a href="/" className="footer-link">CrPC Sections</a></li>
            <li><a href="/" className="footer-link">CPC Sections</a></li>
            <li><a href="/" className="footer-link">Hindu Marriage Act</a></li>
            <li><a href="/" className="footer-link">Constitution Of India</a></li>
            <li><a href="/" className="footer-link">Divorce Law</a></li>
            <li><a href="/" className="footer-link">Property Law</a></li>
            <li><a href="/" className="footer-link">Criminal Law</a></li>
          </ul>
          <a href="/" className="btn btn-primary">VIEW All</a>
        </div>
        <div className="col-md-4">
          <div className="text-center mt-5">
            <img src={logo2} width={200} alt="Bharatiya Kanoon Logo" className="img-fluid" />
            <div className="row mt-4">
              <div className="col-12 text-center">
                <div className="social-icons mt-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center mt-5">
            <img src={logoNalsa} alt="NALSA Logo" className="img-fluid bg-white" />
            <p className="mt-3">A Pro-bono initiative of Bharatiya Kanoon in association with NALSA</p>
            <a href="/" className="btn btn-primary">Apply for Free Legal Aid</a>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <p className="text-center">
            The information provided on BharatiyaKanoon.com is provided AS IS, subject to <a href="/" className="footer-link">Terms Of Use</a> & <a href="/" className="footer-link">Privacy Policy</a>. It is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice. Advocate ratings displayed on BharatiyaKanoon.com are based on user feedback. They are not recommendations to engage or consult any lawyer. Bharatiya Kanoon does not guarantee accuracy, adequacy or completeness of any information and is not responsible for any errors or omissions, or for results obtained from the use of such information.
          </p>
          <p className="text-center">BharatiyaKanoon.com and the Bharatiya Kanoon Logo are registered trademarks of PAPA Consultancy Pvt. Ltd. All Rights Reserved. 0.0408-IN</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
