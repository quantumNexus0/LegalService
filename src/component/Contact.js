
import React from 'react';


const Contact = () => {
  return (
    <div className="container mt-5 mb-5 animated-background">
      <h1 className="text-center p-5">CONTACT THE FIRM</h1>
      <p className="text-center mb-5">
        This is the space to share the business's contact information. Let people know
        when the business is available, how long it will take to get a response,
        and what the best ways are to get in touch. Remind readers that the
        business is happy to answer their questions, and encourage them to reach
        out.
      </p>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="First name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Last name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            placeholder="Phone number"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter your email"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputMessage" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="inputMessage"
            placeholder="Enter your message"
          />
        </div>
        <div className="col-12 text-center mb-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
