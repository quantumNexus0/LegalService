import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './LegalAdvice.css'; // Import the custom CSS file

const LegalAdvice = () => {
  return (
    <div className="container border border-dark p-4 mt-3 mb-3">
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h4 className="mb-2">Personal / Family</h4>
          <ul className="list-unstyled mb-0">
            <li className="list-group-item">
              <a href="#divorce" className="link-item">Divorce</a>
            </li>
            <li className="list-group-item">
              <a href="#family-dispute" className="link-item">Family Dispute</a>
            </li>
            <li className="list-group-item">
              <a href="#child-custody" className="link-item">Child Custody</a>
            </li>
            <li className="list-group-item">
              <a href="#muslim-law" className="link-item">Muslim Law</a>
            </li>
            <li className="list-group-item">
              <a href="#medical-negligence" className="link-item">Medical Negligence</a>
            </li>
            <li className="list-group-item">
              <a href="#motor-accident" className="link-item">Motor Accident</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h4 className="mb-2">Criminal / Property</h4>
          <ul className="list-unstyled mb-0">
            <li className="list-group-item">
              <a href="#criminal" className="link-item">Criminal</a>
            </li>
            <li className="list-group-item">
              <a href="#property" className="link-item">Property</a>
            </li>
            <li className="list-group-item">
              <a href="#landlord-tenant" className="link-item">Landlord / Tenant</a>
            </li>
            <li className="list-group-item">
              <a href="#cyber-crime" className="link-item">Cyber Crime</a>
            </li>
            <li className="list-group-item">
              <a href="#wills-trusts" className="link-item">Wills / Trusts</a>
            </li>
            <li className="list-group-item">
              <a href="#labour-service" className="link-item">Labour & Service</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h4 className="mb-2">Civil / Debt Matters</h4>
          <ul className="list-unstyled mb-0">
            <li className="list-group-item">
              <a href="#documentation" className="link-item">Documentation</a>
            </li>
            <li className="list-group-item">
              <a href="#consumer-court" className="link-item">Consumer Court</a>
            </li>
            <li className="list-group-item">
              <a href="#civil" className="link-item">Civil</a>
            </li>
            <li className="list-group-item">
              <a href="#cheque-bounce" className="link-item">Cheque Bounce</a>
            </li>
            <li className="list-group-item">
              <a href="#recovery" className="link-item">Recovery</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h4 className="mb-2">Corporate Law</h4>
          <ul className="list-unstyled mb-0">
            <li className="list-group-item">
              <a href="#arbitration" className="link-item">Arbitration</a>
            </li>
            <li className="list-group-item">
              <a href="#trademark-copyright" className="link-item">Trademark & Copyright</a>
            </li>
            <li className="list-group-item">
              <a href="#customs-central-excise" className="link-item">Customs & Central Excise</a>
            </li>
            <li className="list-group-item">
              <a href="#startup" className="link-item">Startup</a>
            </li>
            <li className="list-group-item">
              <a href="#banking-finance" className="link-item">Banking / Finance</a>
            </li>
            <li className="list-group-item">
              <a href="#gst" className="link-item">GST</a>
            </li>
            <li className="list-group-item">
              <a href="#corporate" className="link-item">Corporate</a>
            </li>
            <li className="list-group-item">
              <a href="#tax" className="link-item">Tax</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h4 className="mb-2">Others</h4>
          <ul className="list-unstyled mb-0">
            <li className="list-group-item">
              <a href="#armed-forces-tribunal" className="link-item">Armed Forces Tribunal</a>
            </li>
            <li className="list-group-item">
              <a href="#supreme-court" className="link-item">Supreme Court</a>
            </li>
            <li className="list-group-item">
              <a href="#insurance" className="link-item">Insurance</a>
            </li>
            <li className="list-group-item">
              <a href="#immigration" className="link-item">Immigration</a>
            </li>
            <li className="list-group-item">
              <a href="#international-law" className="link-item">International Law</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 d-flex flex-column align-items-center justify-content-center ">
          <h4 className="mb-2">Talk to a Lawyer</h4>
          <p className="mb-3">Need help to find the right lawyer?</p>
          <button className="btn btn-primary btn-lg w-100">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default LegalAdvice;
