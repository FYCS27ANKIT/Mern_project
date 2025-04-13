import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const[user,setUser] = useState({})
  const navigate = useNavigate()

  const addUser=(e)=>{
    e.preventDefault();
      axios.post('http://localhost:2000/user/add',user)
      .then((res)=>navigate('/user/'))
      .catch((err)=>console.log(err))
  }
  return (
    <div>
      <div className="container con-top mt-4">
        <div className="card shadow">
          <div className="card-body p-3">
            <form>
              <h3 className='text-center mb-2'>Add User</h3>
              <div class="mb-3">
                <label for="" className="form-label">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  onChange={(e) => {setUser({...user, username : e.target.value})}}
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
                  onChange={(e) => {setUser({...user, email : e.target.value})}}
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name=""
                  id=""
                  placeholder=""
                  onChange={(e) => {setUser({...user, password : e.target.value})}}
                />
              </div>
              <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    onClick={addUser}
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
  )
}

export default AddUser
