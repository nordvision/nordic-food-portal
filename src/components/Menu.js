import React from 'react';
import ProTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
        <Link to ="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/seasons">Seasons</Link>
        <Link to="/stories">Food stories</Link>
        <Link to="/search">Search</Link>
        <Link to="/test">Test </Link>
    </div>
  );
}

Menu.propTypes = {};

export { Menu };
