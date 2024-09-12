import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FindLawyer.css'; // Ensure this path is correct
   


const FindLawyer = () => {
  return (
    <div className="container border border-dark p-4 mt-3">
      <div className="row mt-2">
        <div className="col-md-3">
          <h2 className="text-center mb-3">Answered Questions</h2>
          <ul className="list-unstyled">
            <li><a href="/" >Divorce Law Queries</a></li>
            <li><a href="/" >Property Law Queries</a></li>
            <li><a href="/" >Criminal Law Queries</a></li>
            <li><a href="/" >Labour & Service Law Queries</a></li>
            <li><a href="/" >Consumer Court Queries</a></li>
            <li><a href="/" >Civil Law Queries</a></li>
            <li><a href="/" >Recovery Law Queries</a></li>
            <li><a href="/" >Documentation Law Queries</a></li>
          </ul>
          <button className="btn btn-primary mt-3">All Answers</button>
        </div>
        <div className="col-md-3">
          <h2 className="text-center mb-3">Guides & Articles</h2>
          <ul className="list-unstyled">
            <li><a href="/" >Divorce Law Guides</a></li>
            <li><a href="/" >Criminal Law Guides</a></li>
            <li><a href="/" >Property Law Guides</a></li>
            <li><a href="/" >Consumer Court Guides</a></li>
            <li><a href="/" >Labour & Service Law Guides</a></li>
            <li><a href="/" >Medical Negligence Law Guides</a></li>
            <li><a href="/" >Civil Law Guides</a></li>
            <li><a href="/" >Cheque Bounce Law Guides</a></li>
          </ul>
          <button className="btn btn-primary mt-3">All Guides</button>
        </div>
        <div className="col-md-3">
          <h2 className="text-center mb-3">Other Resources</h2>
          <ul className="list-unstyled">
            <li><a href="/" >Indian Penal Code (IPC)</a></li>
            <li><a href="/" >Code of Criminal Procedure (CrPC)</a></li>
            <li><a href="/" >Code of Civil Procedure (CPC)</a></li>
            <li><a href="/" >Hindu Marriage Act (HMA)</a></li>
            <li><a href="/" >Income Tax Act</a></li>
            <li><a href="/" >Constitution Of India</a></li>
            <li><a href="/" >POSH Act</a></li>
            <li><a href="/" >Legal Form & Agreements</a></li>
            <li><a href="/" >Legal Video Guides</a></li>
            <li><a href="/" >POSH Training</a></li>
            <li><a href="/" >Supreme Court Judgements</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2 className="text-center mb-3">Get Free Legal Advice</h2>
          <p className="text-center">Get expert legal advice from multiple lawyers within a few hours</p>
          <button className="btn btn-success mt-2 w-100">Ask a Free Question</button>
          <button className="btn btn-secondary mt-2 w-100">Free legal advice</button>
          <h3 className="text-center mt-4">Need Instant Advice</h3>
          <button className="btn btn-primary mt-2 w-100">Talk to a lawyer</button>
        </div>
      </div>
    </div>
  );
};

export default FindLawyer;
