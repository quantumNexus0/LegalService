import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <>
    <div className="container-fluid bg-primary p-5">
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
    </>
  );
}

export default Home;
