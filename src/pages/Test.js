import React from 'react';
import ProTypes from 'prop-types';
import Tile from '../components/Tile';

function Test() {

    const imgSrc = 'https://images.matprat.no/7m7564rvc4-related/mobile';
    const flagSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2560px-Flag_of_Norway.svg.png';
    const logo = 'https://upload.wikimedia.org/wikipedia/en/7/7b/Norsk_rikskringkasting_%28logo%29.svg';
    const title = 'Tittel på oppskrift';
  return (
    <div className="Test App-header">
        <p>Test :)</p>

        <div className="tiles">
            <Tile title={title} logo={logo} flagSrc={flagSrc} imgSrc={imgSrc}/>
            <Tile title={title} logo={logo} flagSrc={flagSrc} imgSrc={imgSrc}/>
            <Tile title={title} logo={logo} flagSrc={flagSrc} imgSrc={imgSrc}/>
        </div>
    </div>
  );
}

Test.propTypes = {};

export default Test;
