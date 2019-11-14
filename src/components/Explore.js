import React from 'react';
import ProTypes from 'prop-types';
import SearchResult from './SearchResult';

const Explore = ({}) => {
  return (
    <div className="explore">
        <h2>Explore what is trending this month</h2>
        <SearchResult query="hei" numberOfResults={4} />

        <h2>Others searched for</h2>
        <SearchResult query="hallo" numberOfResults={4} />

    </div>
  );
};

Explore.propTypes = {};

export default Explore;
