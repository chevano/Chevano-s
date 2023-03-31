import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Catering from "./components/Catering";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home /> } exact></Route>
          <Route path='/about' element={ <About /> } exact></Route>
          <Route path='/catering' element={ <Catering /> } exact></Route>
          <Route path='/contact' element={ <Contact /> } exact></Route>
          <Route path='/menu' element={ <Menu /> } exact></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App