import React from 'react';
import ProTypes from 'prop-types';
import SearchResult from './SearchResult';
import autumnImage from '../resources/autumn.png';

const Explore = ({}) => {
  return (
    <div className="explore">
        <SearchResult title="Explore what is trending this month" query={[52772, 52772]} numberOfResults={4} />

        <SearchResult title="Others searched for" query={[52772, 52772]} numberOfResults={4} />

        <div className="autumn">
            <div className="w-50">
                <h2 className="season-title">Autumn</h2>
                <p>Autumn is the time for harvest, hunting and conservation. Explore recepies from the Scaninvian countries.</p>
                <p className="underlined-text">Show Autumn recepies</p>
                <p className="underlined-text">Read more about autumn in scandinavia</p>
            </div>
            <div className="w-50">
                <img src={autumnImage} />
            </div>
        </div>
    </div>
  );
};

Explore.propTypes = {};

export default Explore;
