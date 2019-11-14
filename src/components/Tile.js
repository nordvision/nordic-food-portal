import React from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from "react-country-flag";

const Tile = ({ title, logo, imgSrc, flagSrc, hearts, nationality }) => {
    return (
        <div className="title-wrapper">
            <div className="tile">
                <img src={imgSrc} className="food-image"/>
                <img src={logo} className="logo" />
                <div className="flag">
                    <ReactCountryFlag code={nationality} />
                </div>
                <img src={logo} className="logo"/>
                <h2 className="tile-title">{title}</h2>
                <span>{hearts}</span>
            </div>
        </div>
    );
};

Tile.propTypes = {};

export default Tile;
