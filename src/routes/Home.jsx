import React from 'react';
import Navbar from '../components/main-components/Navbar';
import { Outlet } from 'react-router-dom';

import "../css/Home.css";
const Home = () => {
  return (
    <div>
        <Navbar />
        <h1>Home</h1>
        <p>This is the home page.</p>
        <Outlet />
    </div>
  );
};

export default Home;
