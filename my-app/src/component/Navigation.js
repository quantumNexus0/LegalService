import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import changeLanguageImage from './images/change_language.png'; // Ensure the path is correct
import Logo from './images/logo1.png'; // Ensure the path is correct

const Navigation = () => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
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
              <a href="/dashboard" className="text-dark text-decoration-none fs-6 fs-md-5">Indian Kanoon</a>
              <a href="/job-order" className="text-dark text-decoration-none fs-6 fs-md-5">Indian Penal Code</a>
              <a href="/work-list" className="text-dark text-decoration-none fs-6 fs-md-5">Ask A Free Question</a>
              <a href="/material-list" className="text-dark text-decoration-none fs-6 fs-md-5">Talk To Lawyer</a>
              <a href="/planning" className="text-dark text-decoration-none fs-6 fs-md-5">Free Legal Advice</a>
              <a href="/settings" className="text-dark text-decoration-none fs-6 fs-md-5">Lawyer Signup</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar starts here */}
      <Navbar className="bg-light border-bottom py-2" expand="lg">
        <div className="container d-flex align-items-center">
          {/* Hamburger Button */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="me-3 d-lg-none" 
            style={{ fontSize: '1rem', padding: '0.25rem 0.5rem' }} // Adjust size here
          />
          <Navbar.Brand href="#home" className="d-flex align-items-center flex-grow-1">
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid d-none d-sm-block" // Logo visible on small devices and up
              style={{ maxHeight: '100px' }} // Max height for larger screens
            />
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid d-block d-sm-none" // Logo visible on extra small devices
              style={{ maxHeight: '70px' }} // Max height for small screens
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-6 gap-3 gap-md-4 gap-sm-2 flex-wrap">
           <Nav.Link href="/dashboard" className="nav-link">FIND A LAWYER</Nav.Link>
           <Nav.Link href="/calendar" className="nav-link">LEGAL ADVICE</Nav.Link>
           <Nav.Link href="/messages" className="nav-link">IPC SECTION</Nav.Link>
           <Nav.Link href="/billing" className="nav-link">BNS SECTION</Nav.Link>
          <Nav.Link href="/matters" className="nav-link">ABOUT</Nav.Link>
          <Nav.Link href="/reports" className="nav-link">MY ACCOUNT</Nav.Link>
            </Nav>

            {/* Search form */}
            <Form className="d-block d-lg-none d-flex align-items-center ms-auto" role="search">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ maxWidth: '300px', fontSize: '0.875rem' }} // Adjust the max width as needed
              />
              <Button variant="outline-success" style={{ fontSize: '0.875rem', padding: '0.375rem 0.75rem', margin: '10px' }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
