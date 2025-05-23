import { useState } from 'react';
import axios from '../axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Registration() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/register', user);
    navigate('/login');
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div class="card col-12 col-lg-4 shadow p-2">
          <h3 className='text-center my-2'>Registration Form</h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Enter username"
                  onChange={e => setUser({ ...user, username: e.target.value })} 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your email</label>
                <input
                  type="email"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Enter email"
                  onChange={e => setUser({ ...user, email: e.target.value })} 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Create password"
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
              </div>
              <div
                className="row justify-content-center align-items-center g-2"
              >
                <div className="col-xsm-12 col-sm-6">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Submit
                  </button>
                  
                </div>
                <div className="col-xsm-12 col-sm-6">
                  <button
                    type="reset"
                    className="btn btn-primary w-100"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <p className='text-center mt-4'>Already have account ? click <NavLink className="btn btn-warning py-0 border-dark bg-light" to="/login">Login</NavLink> to login</p>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
}

