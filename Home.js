// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <h1>Welcome to Advanced Task Manager</h1>
        <p>Manage your tasks efficiently and stay organized.</p>
        <div className="auth-buttons">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>
);

export default Home;
