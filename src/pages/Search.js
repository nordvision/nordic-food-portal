import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchField from 'react-search-field';
import SearchResult from '../components/SearchResult';
import Explore from '../components/Explore';

class Search extends Component {
  constructor(props) {
    super(props);
    this.submitInput = this.submitInput.bind(this);
    this.state = {
      query: null
    }
  }

  submitInput(value, event) {
    this.setState({ query: value })
  }

  render() {
      return (
        <div className="search">
            <div className="search-field">
                <SearchField
                    placeholder='Search item'
                    onEnter={this.submitInput}
                />
            </div>
          {this.state.query ? <SearchResult query={this.state.query} numberOfResults={8}/> : <Explore/>}
        </div>
    );
  }
}

Search.propTypes = {};

export default Search;
