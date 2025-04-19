import { useEffect, useState } from 'react';
import axios from '../axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function UserEv() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    const res = await axios.get('/events/user');
    setEvents(res.data);
  };

  useEffect(() => {
    const checkLogin = () => {
      axios.get("/profile").then(() => {
      })
      .catch((err) => {
        return <p className='text-center mt-5'>Please <NavLink className="btn btn-primary" to="/login">log in</NavLink> to manage your events.</p>
      })
    };
    checkLogin();
  },[])

  useEffect(() => { fetchEvents(); }, []);

  const handleDelete = async id => {
    await axios.delete(`/events/${id}`);
    fetchEvents();
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center my-2'>All Events</h2>
        {events.map(ev => (
        <div className="row justify-content-start align-items-start g-2" key={ev._id}>
          <div className="col-6 col-lg-3">
            <div className="card">
              <img className="card-img-top" src={ev.image} alt="Title" height={200} width={100}/>
              <div className="card-body">
                <h4 className="card-title">{ev.title}</h4>
                <p className='card-text'><span className='fw-bold'>Description</span> : {ev.description} <br /> <span className='fw-bold'>Date</span> : {new Date(ev.date).toLocaleDateString()} </p>
              </div>
              <div className="card-footer bg-light">
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col-12 col-lg-6">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={() => navigate(`/edit/${ev._id}`)}>Edit
                    </button>
                  </div>
                  <div className="col-12 col-lg-6">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={() => handleDelete(ev._id)}>Delete
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}
