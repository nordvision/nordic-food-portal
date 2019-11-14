import React from 'react';
import PropTypes from 'prop-types';
import video from './maaemo-film.mp4'
import {Menu} from '../components/Menu';
import autumnImage from './../resources/autumn.png';

function Home() {
  return (
    <div className="Home page-background">
        <div className="home-background-wrapper">
        <div className="home-title-wrapper">
            <h1 className="home-title">Nordic food portal </h1>
            <p>Recipes, food culture and stories from the Nordic public broadcasters</p>
        </div>
        <video autoPlay loop className="home-video">
            <source src={video} type="video/mp4" />
            <Menu />
        </video>
        </div>
        <div className="title-explore">
            <p>Explore seasonal</p>
            <p>food from the</p>
            <p>Northern contries</p>
        </div>

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

        <div className="autumn-recipes">
            <div>
                <h2 className="tiles-title">Autumn recipes</h2>
            </div>
        </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
