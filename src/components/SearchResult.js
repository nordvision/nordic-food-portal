import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getRecipeList, getSearch} from '../api/api';
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
        if (Array.isArray(query)){
            getRecipeList(query)
                .then(result => this.setState({searchResult: result }));
        } else {
            getSearch(query, numberOfResults)
                .then(result => this.setState({searchResult: result }));
        }
    }

    render() {
        const { searchResult } = this.state;
        const { title} = this.props;

        console.log('searchResult: ', searchResult);

        if (!searchResult) return null;
        return (
            <div>
                {title && <h2>{title}</h2>}
            <div className="search-result">

                {searchResult.map(element => {
                    console.log('element: ', element);
                    return (
                            <Tile
                                id={element.id}
                                title={element.title}
                                logo={element.logo}
                                flagSrc={element.image}
                                imgSrc={element.image}
                                hearts={element.hearts}
                                nationality={element.nationality}
                                key={element.id}
                            />)
                    }
                )}
            </div>
            </div>
        );
    }
}

SearchResult.propTypes = {
    query: PropTypes.string,
    numberOfResults: PropTypes.number
};

export default SearchResult;

