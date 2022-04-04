
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from "./components/Navbar"
import "./App.css";
import {  Route ,Routes ,Navigate} from "react-router-dom";



const App =  () => {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element= {<Home/>} />
      <Route exact path="/contact" element= {<Contact />} />
      <Route exact path="/about" element= {<About />} />
      <Route exact path="/service" element= {<Service />} />
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    </div>
  
  );
}

export default App;
