import React from "react";
import NavLinks from "./Components/Navbar/NavLinks.jsx";
import Dashboard from "./Components/dashboard/Dashboard.jsx";
import Add from "./Components/add/Add.jsx";
import NotFound from "./Components/notfound/NotFound.jsx";
import Update from "./Components/update/Update.jsx";
import Login from "./Components/register.login/Login.jsx";
import "./style.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/register.login/Register.jsx";
 
function App() {
  return (
    <div className="App">
      
      <NavLinks/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
