import React from 'react'
import './NavBar.css'
// import { Link } from 'react-router-dom'
import {Link } from "react-router-dom";
export default function NavBar() {
  return (
      <header className=" bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           
            <div className="offcanvas offcanvas-start flex-grow-0" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Navbar</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        {/* <li className="nav-item">
                          <Link className="nav-link" to='/signin'>Sign in</Link>
                        </li> */}
                   
                        <li className="nav-item">
                          <Link className="nav-link" to='/signup'>Sign up</Link>
                        </li>
                      </ul>
                </div>
          </div>
        </div>
        </nav>
    </header>
  )
}
