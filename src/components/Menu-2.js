import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getMenuPoints} from '../api/api';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        getMenuPoints()
            .then(result => this.setState({ data: result }));
    }

    render() {
        console.log('this.data: ', this.state.data);
        if (!this.state.data) {
            return <div className="menu"/>
        }

        return (
            <div className="menu">
                {this.state.data.map(element => {
                    return <Link to={element.slug} className="menu-item" key={element.slug}>{element.title}</Link>
                })}
                <Link to="/test" className="menu-item">test</Link>
            </div>
        );
    }
}

Menu.propTypes = {};

export { Menu };
