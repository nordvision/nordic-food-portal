import React from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from "react-country-flag";
import {Link} from 'react-router-dom';
import ReactSVG from 'react-svg'
import { NrkHeartActive } from '@nrk/core-icons/jsx'  // React, ReactElement
import Flag from './Flag';


const Tile = ({id, title, logo, imgSrc, flagSrc, hearts, nationality}) => {
    return (
        <Link className="title-wrapper" to={`/recipe/${id}`}>
            <div className="tile">
                <img src={imgSrc} className="food-image"/>
                <div className="tile-information">
                    <div className="flag">
                        <Flag nationality={nationality} />
                    </div>
                    <h2 className="tile-title">{title}</h2>
                </div>
                <div className="logos">
                    <img src={logo} className="logo"/>
                    <div className="likes">
                        <NrkHeartActive />
                        <span>{hearts}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Tile.propTypes = {};

export default Tile;
