import { useEffect, useState } from 'react';
import axios from '../axios';
import bgImg from './image.jpg'

export default function AllEv() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/events').then(res => setEvents(res.data));
  }, []);

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center my-2'>All Events</h2>
        {events.map(ev => (
        <div className="row justify-content-start align-items-start g-2" key={ev._id}>
          <div className="col-6 col-md-3">
            <div className="card">
              <img className="card-img-top" src={ev.image} alt="Title" height={200} width={100}/>
              <div className="card-body">
                <h4 className="card-title">{ev.title}</h4>
                <p className='card-text'><span className='fw-bold'>Description</span> : {ev.description} <br /> <span className='fw-bold'>Date</span> : {new Date(ev.date).toLocaleDateString()} </p>
              </div>
              <div className="card-footer bg-light">
                <button type="button" className="btn btn-primary w-100">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

{/* <div>
<h2>All Events</h2>
{events.map(ev => (
  <div key={ev._id}>
    <h3>{ev.title}</h3>
    <p>{ev.description}</p>
    <p>{new Date(ev.date).toLocaleDateString()}</p>
    <p>By: {ev.createdBy?.username}</p>
  </div>
))}
</div> */}
