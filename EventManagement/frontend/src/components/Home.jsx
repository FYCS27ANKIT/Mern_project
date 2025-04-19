import { useEffect, useState } from 'react';
import axios from './axios';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/profile');
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className='container'>
      <h1 className='mt-3 text-center'>Welcome to Event Manager 🎉</h1><br />
      {user ? (
        <>
          <p className='text-center mt-5'>Hello, <strong>{user.username}</strong>! 👋</p>
        </>
      ) : (
        <p className='text-center mt-5'>Please <NavLink className="btn btn-primary" to="/login">log in</NavLink> to manage your events.</p>
      )}
    </div>
  );
}
