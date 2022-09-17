import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './functionBased/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css';
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/pages/About";
import Contact from "./functionBased/pages/Contact";
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>        
            <Navbar />
            <Routes>
                <Route  path="/" element={<TodoContainer />} />  
                <Route  path="about" element={<About />} />
                <Route  path="contact" element={<Contact />} />
                <Route  path="/*" element={<NotMatch />} />
            </Routes>  
           
    </BrowserRouter> 
);

