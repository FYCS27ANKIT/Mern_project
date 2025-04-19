import { useState, useEffect } from 'react';
import axios from '../axios';
import { useNavigate, useParams, NavLink} from 'react-router-dom';

export default function EditEv() {
  const [event, setEvent] = useState({ title: '', description: '', date: '', image : ""});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/events/user').then(res => {
      const found = res.data.find(ev => ev._id === id);
      if (found) setEvent(found);
    });
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`/events/${id}`, event);
    navigate('/myevents');
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
        <div className="card col-12 col-lg-4 shadow p-2">
          <h3 className='text-center my-2'>Edit Event</h3>
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
                  value={event.title}
                  onChange={e => setEvent({ ...event, title: e.target.value })} 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" name="" id="" rows="3" value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })}></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  value={event.date?.split('T')[0]}
                  onChange={e => setEvent({ ...event, date: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image Link</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  value={event.image}
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
                    Edit
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
  );
}
