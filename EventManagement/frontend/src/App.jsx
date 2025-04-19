import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Error from './components/Error';
import Registration from './components/User/Registration';
import Login from './components/User/Login';
import AddEv from './components/Blogs/AddEv';
import EditEv from './components/Blogs/EditEv';
import AllEv from './components/Blogs/AllEv';
import UserEv from './components/Blogs/UserEv';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Registration />} />
              <Route path="login" element={<Login />} />
              <Route path="events" element={<AllEv />} />
              <Route path="myevents" element={<UserEv />} />
              <Route path="add" element={<AddEv />} />
              <Route path="edit/:id" element={<EditEv />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
