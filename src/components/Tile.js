import React from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from "react-country-flag";
import {Link} from 'react-router-dom';
import ReactSVG from 'react-svg'

function renderFlag(nationality) {
    switch(nationality) {
        case "no": 
        return <ReactSVG src="../resources/250px-Flag_of_Norway.svg"/>
        case "dk": 
        return <ReactSVG src="../resources/250px-Flag_of_Denmark.svg.webp"/>
        case "se": 
        return <ReactSVG src="../resources/250px-Flag_of_Sweden.svg.webp"/>
        case "fi": 
        return <ReactSVG src=".././resources/250px-Flag_of_Finland.svg.webp"/>
        case "is": 
        return <ReactSVG src=".././resources/250px-Flag_of_Island.svg.webp"/>
        default:
        return
        break;
        
    }
}

const Tile = ({ id, title, logo, imgSrc, flagSrc, hearts, nationality }) => {
    return (
        <Link className="title-wrapper" to={`/recipe/${id}`}>
            <div className="tile">
                <img src={imgSrc} className="food-image"/>
                <img src={logo} className="logo" />
                <div className="flag">
                    {renderFlag(nationality) }
                </div>
                <img src={logo} className="logo"/>
                <h2 className="tile-title">{title}</h2>
                <span>{hearts}</span>
            </div>
        </Link>
    );
};

Tile.propTypes = {};

export default Tile;
