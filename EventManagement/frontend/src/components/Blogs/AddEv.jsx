import { useState, useEffect } from 'react';
import axios from '../axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AddEv() {
  const [event, setEvent] = useState({ title: '', description: '', date: '', image : "" });
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      axios.get("/profile").then(() => {
      })
      .catch((err) => {
        navigate('/login');
      })
    };
    checkLogin();
  },[])

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/events', event);
    navigate('/myevents');
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div class="card col-12 col-lg-4 shadow p-2">
          <h3 className='text-center my-2'>Create Event</h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Event Title</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  onChange={e => setEvent({ ...event, title: e.target.value })} 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" name="" id="" rows="3" onChange={e => setEvent({ ...event, description: e.target.value })}></textarea>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Date</label>
                <input
                  type="date"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  onChange={e => setEvent({ ...event, date: e.target.value })}
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Image Link</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  onChange={e => setEvent({ ...event, image: e.target.value })}
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
                  <NavLink
                    to="/"
                    type="reset"
                    className="btn btn-danger w-100"
                  >
                    Cancel
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
}
