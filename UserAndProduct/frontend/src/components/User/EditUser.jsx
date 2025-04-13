import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

  const {id} = useParams(); 
  const[users, setUsers] = useState({username : "", email : "", password : ""});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:2000/user/singleUser/${id}`)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))
  } ,[id]);

  const editUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:2000/user/edit/${id}`, users)
    .then((res) => navigate("/user/"))
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container con-top mt-4">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-12 col-lg-6">
          <div className="card shadow">
          <div className="card-body p-3">
            <form>
              <h3 className='text-center mb-2'>Edit User</h3>
              <div class="mb-3">
                <label for="" className="form-label">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  value={users.username}
                  onChange={(e) => {setUsers({...users, username : e.target.value})}}
                />
              </div>
              <div class="mb-3">
                <label for="" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder=""
                  value={users.email}
                  onChange={(e) => {setUsers({...users, email : e.target.value})}}
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder=""
                  value={users.password}
                  onChange={(e) => {setUsers({...users, password : e.target.value})}}
                />
              </div>
              <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    onClick={editUser}
                  >
                    Submit
                  </button>
                  
                </div>
                <div className="col">
                  <button
                    type="reset"
                    className="btn btn-primary w-100"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default EditUser
