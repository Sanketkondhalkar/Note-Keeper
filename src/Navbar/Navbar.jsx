import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
 
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/Logo.png"
            alt="Logo_Error"
            className="d-inline-block text-center logo ms-1"
          />
          <span className="brand_name ms-3">Note Keeper</span>
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
