import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getSearch} from '../api/api';
import Tile from './Tile';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: null
        }
    }

    componentDidMount() {
        const { query, numberOfResults } = this.props;
        console.log('query:', query);
        getSearch(query, numberOfResults)
            .then(result => this.setState({searchResult: result }));
    }

    render() {
        const { searchResult } = this.state;

        console.log('searchResult: ', searchResult);

        if (!searchResult) return null;
        return (
            <div className="search-result">
                {searchResult.map(element => (
                    <Tile
                        title={element.title}
                        logo={element.image}
                        flagSrc={element.image}
                        imgSrc={element.image}
                        hearts={element.hearts}
                        nationality={element.nationality}
                        key={element.id}
                    />)
                )}
            </div>
        );
    }
}

SearchResult.propTypes = {
    query: PropTypes.string,
    numberOfResults: PropTypes.number
};

export default SearchResult;

