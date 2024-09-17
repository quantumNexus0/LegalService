import React, { useState } from 'react';

function LoginSignup() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <h2 className="card-title text-center mb-2 mt-5">Login / Signup</h2>
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <div className="row mt-3">
                <div className="row-md-1 ">
                  <button onClick={handleLoginClick} style={{ border: 'none', backgroundColor: 'transparent', padding: '10px 20px', cursor: 'pointer' }}>
                    Log In
                  </button>
                  <button onClick={handleSignupClick} style={{ border: 'none', backgroundColor: 'transparent', padding: '10px 20px', cursor: 'pointer' }}>
                    Sign Up
                  </button>
                </div>
              </div>
              {showLoginForm ? (
                <div>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Enter your E-Mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Enter your Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me on this computer
                    </label>
                  </div>
                  <button className="btn btn-success btn-block mt-3">
                    Login
                  </button>
                  <div className="text-center mt-2">
                    <a href="/">Forgot Password?</a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="form-group mt-3">
                    <label htmlFor="signup-email">Enter your E-Mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="signup-email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-password">Enter your Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="signup-password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-username">Enter your Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="signup-username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <button className="btn btn-success btn-block mt-3">
                    Signup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-sm rounded mt-5">
        <div className="card-body">
          <h3 className="card-title text-center">It's secure and confidential</h3>
          <p>
            We maintain full data security and confidentiality of your
            personal details. Please check our Terms of Use and Privacy
            Policy for details.
          </p>
        </div>
      </div>
      <div className="card shadow-sm rounded mt-3">
        <div className="card-body">
          <h3 className="card-title text-center">
            How does Bharatiya-khanoon Work?
          </h3>
          <p>
            Get expert advice from top-rated lawyers in India - Contact
            Now.
          </p>
          <button className="btn btn-info btn-block mt-3">Know more</button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h4 className="card-title text-center">
                India's Leading Legal Platform
              </h4>
              <p className="card-text">
                Get the legal help & representation from over 10,000 lawyers across
                700 cities in India.
              </p>
              <button className="btn btn-primary btn-block">
                Talk to a Lawyer
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h4 className="card-title text-center">Free Legal Advice</h4>
              <p className="card-text">
                Post your question for free and get response from experienced
                lawyers within 48 hours.
              </p>
              <button className="btn btn-success btn-block">
                Ask a Free Question
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h4 className="card-title text-center">Contact a Lawyer</h4>
              <p className="card-text">
                Contact and get legal assistance from our lawyer network for your
                specific matter.
              </p>
              <button className="btn btn-info btn-block">Find a Lawyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;