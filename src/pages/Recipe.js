import React, {Component} from 'react';
import {getRecipe} from '../api/api';
import {useParams, withRouter} from 'react-router-dom';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        }

    }
    componentDidMount() {
        let { id } = useParams();
        console.log('id: ', id);
        getRecipe(id)
            .then(result => this.setState({recipe: result}));
    }

    render() {

        console.log('recipe: ', this.state.recipe);
        return (
            <div>

            </div>
        );
    }
}

export default withRouter(Recipe);