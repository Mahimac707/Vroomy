import { Link } from 'react-router-dom';

import React from 'react'
import { useState } from 'react';

function Navbar () {
    const [ menu, setMenu ] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="right">
            <h1>Vroomy</h1>
        </div>
        <div className="center">
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/service">Support & Service</Link>
        <Link to="/shop"><i className="fa-solid fa-cart-arrow-down"></i></Link>
        </div>
        <div
          className="left"
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
        >
          <button><i className="fa-solid fa-circle-user"></i></button>
          {menu && (
            <div className="dropdown">
              <Link to="/login">Login</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
