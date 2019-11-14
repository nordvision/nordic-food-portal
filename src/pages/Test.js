import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from '../components/Tile';
import {getTiles} from '../api/api';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        getTiles()
            .then(result => this.setState({data: result}));
    }

    render() {
        console.log('this.data: ', this.state.data);
        if (!this.state.data) {
            return <div className="Test"/>
        }

        /*
    const title = 'Tittel på oppskrift';

    const imgSrc = 'https://images.matprat.no/7m7564rvc4-related/mobile';
         */
        const flagSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2560px-Flag_of_Norway.svg.png';
        const logo = 'https://upload.wikimedia.org/wikipedia/en/7/7b/Norsk_rikskringkasting_%28logo%29.svg';

        return (
            <div className="Test">
                <div className="tiles">
                    {this.state.data.map(element => {
                        return (
                            <Tile
                                title={element.title} logo={logo}
                                flagSrc={flagSrc}
                                imgSrc={element.image}
                                hearts={element.hearts}
                                nationality={element.nationality}
                                key={element.id} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

Test.propTypes = {};

export default Test;
