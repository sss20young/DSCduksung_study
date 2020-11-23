import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/noticeboard">NoticeBoard</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;