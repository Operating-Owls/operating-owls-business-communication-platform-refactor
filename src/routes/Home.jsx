import React from 'react';
import Navbar from '../components/main-components/Navbar';
import { Outlet } from 'react-router-dom';

import "../css/Home.css";
const Home = () => {
  return (
    <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <Outlet />
    </div>
  );
};

export default Home;
