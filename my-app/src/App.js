import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';   // Adjust the path as needed
import Home from './component/home';
// import LoginSignup from './component/loginsignup';

const App = () => {
  return (
    <>    
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/legaladvice" element={<LegalAdvice />} /> */}
        {/* <Route path="/ipcsection" element={<IpcSection/>} /> */}
        
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
    <a href="./Home">Home</a>
    </>
    

  );
};

export default App;
