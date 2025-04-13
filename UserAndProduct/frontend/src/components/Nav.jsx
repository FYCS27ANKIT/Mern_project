import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">User&Product Management</a>
              
              {/* Toggle Button for Mobile View */}
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
      
              {/* Navbar Links */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product/" className="nav-link">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product/add" className="nav-link">AddProduc</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user/add" className="nav-link">AddUser</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Nav
