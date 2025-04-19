import { Link, useNavigate } from 'react-router-dom';
import axios from './axios';
import { useEffect, useState } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Nav() {
  const navigate = useNavigate();
  const[isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      axios.get("/profile").then(() => {
        setisLoggedIn(true);
      })
      .catch((err) => {
        setisLoggedIn(false);
        console.log(err);
      })
    };
    checkLogin();
  },[])

  const handleLogout = async () => {
    await axios.post('/logout');
    setisLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Website</a>
        
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
              <Link to="/add" className="nav-link">AddEvents</Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">AllEvents</Link>
            </li>
            <li className="nav-item">
              <Link to="myevents" className="nav-link">Your Events</Link>
            </li>
            {isLoggedIn ? (<><li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
            </li></>)
            : (<><li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li></>)
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

