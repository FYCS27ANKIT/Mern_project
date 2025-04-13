import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate ,NavLink } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate()
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/user/")
      .then((res) => setAllUser(res.data))
      .catch((err) => console.log(err));
  });

  const delUser =(id)=>{
    axios.delete(`http://localhost:2000/user/delete/${id}`)
    .then((res)=>navigate('/user/'))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <div className="container mt-3">
        <h2 className="text-center">All Users</h2>
              <table className="table table-responsive table-bordered  table-striped mx-5 mt-3">
                <thead className="bg-dark text-light">
                  <tr scope="row">
                    <th scope="col" className="bg-dark text-light">UserName</th>
                    <th scope="col" className="bg-dark text-light">Email</th>
                    <th scope="col" className="bg-dark text-light">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUser.map((user) => (
                    <tr className="" key={user._id}>
                      <td scope="row">{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                      <NavLink
                        name=""
                        id=""
                        className="btn btn-primary mx-2 shadow"
                        to={`/user/edit/${user._id}`}
                        role="button"
                      >Edit</NavLink>
                      <button
                        type="button"
                        className="btn btn-danger mx-2 shadow"
                        onClick={()=>delUser(user._id)}
                      >Delete</button>
                          
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default Users
