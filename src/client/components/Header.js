import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React Redux my first SSR application
                </Link>
                <ul className="right">
                    <li>
                        <Link to="/establishment">Establishment</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
