import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';   //Form, FormControl, Button, when need a search bard 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript
// import './Navigation.css'; // Import custom CSS for navigation
import changeLanguageImage from './images/change_language.png';
import Logo from './images/logo1.png';
import FindLawyer from './findlawyer'; // Ensure the file name matches the import
import LegalAdvice from './legaladvice'; // Ensure the file name matches the import
import IpcSection from './ipcsection';
import LoginSignup from './loginsignup';
import AboutComponent from './AboutComponent';
 // Updated import path

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [showFindLawyer, setShowFindLawyer] = useState(false);
  const [showLegalAdvice, setShowLegalAdvice] = useState(false);
  const [showIpcSection, setShowIpcSection] = useState(false);
  const [showLoginsignup, setShowLoginsignup] = useState(false);
  const [showAboutComponent, setShowAboutComponent] = useState(false);
  

  const handleMenuClick = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  const handleSelect = () => {
    setExpanded(false); // Collapse the menu after selection
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

  const toggleFindLawyer = () => {
    setShowFindLawyer(prevShow => !prevShow);
    setShowLegalAdvice(false);
    setShowIpcSection(false);
    setShowLoginsignup(false);
    setShowAboutComponent(false);
  };

  const toggleLegalAdvice = () => {
    setShowLegalAdvice(prevShow => !prevShow);
    setShowFindLawyer(false);
    setShowIpcSection(false);
    setShowLoginsignup(false);
    setShowAboutComponent(false);
  };
  
  const toggleIpcSection = () => {
    setShowIpcSection(prevShow => !prevShow);
    setShowFindLawyer(false);
    setShowLegalAdvice(false);
    setShowLoginsignup(false);
    setShowAboutComponent(false); 
  };

  const toggleLoginsignup = () => {
    setShowLoginsignup(prevShow => !prevShow);
    setShowFindLawyer(false);
    setShowLegalAdvice(false);
    setShowIpcSection(false); 
    setShowAboutComponent(false);
  };
  const toggleAboutComponent = () => {
    setShowAboutComponent(prevShow => !prevShow);
    setShowFindLawyer(false);
    setShowLegalAdvice(false);
    setShowIpcSection(false);
    setShowLoginsignup(false); 
  };
  
  return (
    <>
      {/* Top Section for Language Selector and Links */}
      <div className="bg-light border-bottom py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center">
              <img src={changeLanguageImage} alt="Change Language" height={30} className='me-3' />
              <select 
                name="langctrl"
                className="form-select border-0 rounded-0 bg-light"
                style={{ width: 'auto' }}
                onChange={handleChange}
              >
                <option value="" hidden>Languages</option>
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Tamil</option>
                <option value="">Bangla</option>
                <option value="">Marathi</option>
                <option value="">Kannada</option>
                <option value="">Telugu</option>
                <option value="">Malayalam</option>
              </select>
            </div>
            <div className="d-flex flex-wrap gap-3 gap-md-4">
              <Link to="/dashboard" className="text-dark text-decoration-none fs-6 fs-md-5">Indian Kanoon</Link>
              <Link to="/job-order" className="text-dark text-decoration-none fs-6 fs-md-5">Indian Penal Code</Link>
              <Link to="/work-list" className="text-dark text-decoration-none fs-6 fs-md-5">Ask A Free Question</Link>
              <Link to="/material-list" className="text-dark text-decoration-none fs-6 fs-md-5">Talk To Lawyer</Link>
              <Link to="/planning" className="text-dark text-decoration-none fs-6 fs-md-5">Free Legal Advice</Link>
              <Link to="/settings" className="text-dark text-decoration-none fs-6 fs-md-5">Lawyer Signup</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar className="bg-light border-bottom py-2" expand="lg" expanded={expanded} onToggle={handleMenuClick}> 
        <div className="container d-flex align-items-center">
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="me-3 d-lg-none" 
            onClick={handleMenuClick}
            style={{ fontSize: '1rem', padding: '0.25rem 0.5rem' }} 
          />
          <Navbar.Brand href="#home" className="d-flex align-items-center flex-grow-1">
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid d-none d-sm-block"
              style={{ maxHeight: '100px' }} 
            />
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid d-block d-sm-none"
              style={{ maxHeight: '70px' }} 
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-6 gap-3 gap-md-4 gap-sm-2 flex-wrap">
              <Nav.Link as={Link} to="#" onClick={toggleFindLawyer} className="nav-link">FIND A LAWYER</Nav.Link>
              <Nav.Link as={Link} to="#" onClick={toggleLegalAdvice} className="nav-link">LEGAL ADVICE</Nav.Link>
              <Nav.Link as={Link} to="#" onClick={toggleIpcSection} className="nav-link">IPC SECTION</Nav.Link>
              <Dropdown className="nav-item">
                <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                  BNS SECTION
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/popular-ipc-sections" onClick={handleSelect}>Popular BNS Sections</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/section-497-ipc" onClick={handleSelect}>Section 315 BNS</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/section-354-ipc" onClick={handleSelect}>Section 125 BNS</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/section-34-ipc" onClick={handleSelect}>Section 318 BNS</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/section-506-ipc" onClick={handleSelect}>Section 126 BNS</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/section-304-ipc" onClick={handleSelect}>Section 69 BNS</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/section-420-ipc" onClick={handleSelect}>Section 137 BNS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={Link} to="/about" onClick={toggleAboutComponent} className="nav-link">ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/loginsignup" onClick={toggleLoginsignup} className="nav-link">MY ACCOUNT</Nav.Link>
            </Nav>

            {/* Search form */}
            {/* <Form className="d-none d-lg-flex align-items-center ms-auto" role="search">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ maxWidth: '300px', fontSize: '0.875rem' }} 
              />
              <Button variant="outline-success" style={{ fontSize: '0.875rem', padding: '0.375rem 0.74rem', margin: '10px' }}>Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </div>
      </Navbar>
      <a href="./Home">Home</a>/<a href="./Contact">Contact</a>

      {/* Conditionally render FindLawyer and LegalAdvice components */}
      {showFindLawyer && <FindLawyer />}
      {showLegalAdvice && <LegalAdvice />}
      {showIpcSection && <IpcSection/>}
      {showLoginsignup && <LoginSignup/>}
      {showAboutComponent && <AboutComponent/>}
    </>
  );
};

export default Navigation;
