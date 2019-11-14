import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/about" className="menu-item">About</Link>
            <Link to="/seasons" className="menu-item">Seasons</Link>
            <Link to="/stories" className="menu-item">Food stories</Link>
            <Link to="/search" className="menu-item">Search</Link>
            <Link to="/test" className="menu-item">Test </Link>
        </div>
    );
};

Menu.propTypes = {};

export { Menu };
