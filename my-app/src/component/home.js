import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './Home.css'; // Import the CSS file
import LawyerSearch from './LawyerSearch';
import TopRatedLawyers from './TopRatedLawyers';



const Home = () => {
  return (
    <>
    <div className="container-fluid bg-primary p-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center text-white">
          <h1 className="display-4 mb-4">Free Legal Advice Online</h1>
          <h2 className="display-5 mb-4">From Top Rated Lawyers</h2>
          <p className="lead mb-4">Choose from over 10,000 lawyers across 700+ cities in India</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-secondary btn-lg mr-3 " type="button">Talk to a Lawyer</button>
          <button className="btn btn-light btn-lg" type="button">Ask a Free Question</button>
         </div>
        </div>
      </div>
    </div>
     <LawyerSearch/>
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">WHY CHOOSE US</h2>
        <p className="text-center mb-5">
          This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about, and add an engaging image or video.
        </p>
        <Row className="g-4">
          <Col md={3}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <i className="bi bi-globe2" style={{ fontSize: '2rem' }}></i>
                <h5 className="card-title mt-3">Expertise</h5>
                <p className="card-text">Benefit from our extensive legal knowledge and experience.</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <i className="bi bi-pen" style={{ fontSize: '2rem' }}></i>
                <h5 className="card-title mt-3">Personalized Service</h5>
                <p className="card-text">Receive tailored legal advice and representation.</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <i className="bi bi-eye" style={{ fontSize: '2rem' }}></i>
                <h5 className="card-title mt-3">Proven Results</h5>
                <p className="card-text">Trust our history of successful case outcomes.</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <i className="bi bi-heart" style={{ fontSize: '2rem' }}></i>
                <h5 className="card-title mt-3">Comprehensive Support</h5>
                <p className="card-text">From consultation to courtroom, we've got you covered.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <TopRatedLawyers/>
    </section>
    </>
  );
}

export default Home;
