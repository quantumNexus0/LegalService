import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';   // Adjust the path as needed
import Home from './component/home';
import Contact from './component/Contact';
import AboutComponent from './component/AboutComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './component/Footer';



const App = () => {
  return (
    <>    
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/AboutComponent" element={<AboutComponent/>}/>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/legaladvice" element={<LegalAdvice />} /> */}
        {/* <Route path="/ipcsection" element={<IpcSection/>} /> */}
        
        {/* Add more routes here as needed */}
      </Routes>
      <Footer/>
    </Router>
    </>
    

  );
};

export default App;
