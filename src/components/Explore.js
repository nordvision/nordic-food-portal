import React from 'react';
import ProTypes from 'prop-types';
import SearchResult from './SearchResult';
import autumnImage from '../resources/autumn.png';

const Explore = ({}) => {
  return (
    <div className="explore">
        <SearchResult title="Explore what is trending this month" query="chicken" numberOfResults={4} />

        <SearchResult title="Others searched for" query="fish" numberOfResults={4} />

        <div className="autumn">
            <div className="w-50">
                <h2 className="season-title">Autumn</h2>
                <p className="season-description">Autumn is the time for harvest, hunting and conservation. Explore recepies from the Scaninvian countries.</p>
                <p className="underlined-text">Show Autumn recipies</p>
                <p className="underlined-text">Read more about autumn in scandinavia</p>
            </div>
            <div className="w-50">
                <img src={autumnImage} />
            </div>
        </div>
        <SearchResult title="Healthy choices" query="salmon" numberOfResults={4} />
    </div>
  );
};

Explore.propTypes = {};

export default Explore;
