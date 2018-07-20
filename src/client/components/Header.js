import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {

    return (
        <nav>
            <div>
                <ul className="">
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
