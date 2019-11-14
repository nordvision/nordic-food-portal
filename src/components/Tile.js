import React from 'react';
import ProTypes from 'prop-types';



const Tile = ({ title, logo, imgSrc, flagSrc }) => {
    return (
        <div className="title-wrapper">
            <div className="tile">
                <img src={imgSrc} className="food-image"/>
                <img src={flagSrc} className="flag" />
                <img src={logo} className="logo"/>
                <h2 className="tile-title">{title}</h2>
            </div>
        </div>
    );
};

Tile.propTypes = {};

export default Tile;
