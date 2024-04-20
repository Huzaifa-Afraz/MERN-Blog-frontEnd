import React from 'react'
import './NavBar.css'
// import { Link } from 'react-router-dom'
import {NavLink, useNavigate } from "react-router-dom";
export default function NavBar() {
  const  navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/signin')
  }
  return (
      <header className=" bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           
            <div className="offcanvas offcanvas-start flex-grow-0" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Navbar</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink>
                        </li>
                        {localStorage.getItem('token')?<li className="nav-item">
                          <NavLink className="nav-link btn btn-primary" aria-current="page" onClick={handleLogout}>Log out</NavLink>
                        </li>:
                        <><li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to='/signin'>Sign in</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to='/signup'>Sign up</NavLink>
                        </li> </>}
                      </ul>
                </div>
          </div>
        </div>
        </nav>
    </header>
  )
}
