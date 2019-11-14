import React, { Component } from 'react';
import { getRecipe } from '../api/api';
import { useParams, withRouter } from 'react-router-dom';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        }

    }
    componentDidMount() {
        //const { id } = ();
        console.log('papams: ', this.props.match.params.recipeId);
        const id = this.props.match.params ? this.props.match.params.recipeId : undefined;
        console.log('id: ', id);
        if (id) {
            getRecipe(id)
                .then(result => this.setState({ recipe: result }));
        }
    }

    render() {

        console.log('recipe: ', this.state.recipe);
        const { recipe } = this.state;
        if (!recipe) {
            return null;
        }
        return (
            <div>
                <div className="intro">
                    <div className="w-50">
                        <h1>{recipe.title}</h1>
                        <p>From {recipe.company} ({recipe.nationality})</p>
                    </div>
                    <div className="w-50">
                        <img src={recipe.image} />
                    </div>
                </div>

                <div className="body">
                    <div className="body-50">
                        <p>{recipe.description}</p>
                    </div>

                    <div className="table">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients && recipe.ingredients.map((ingredient, inc) => <li key={inc}>{ingredient}</li>)}</ul>
                    </div>
                </div>

                <p><b>Tags</b></p>
                {recipe.tags && recipe.tags.map((tag, inc) => <span key={inc}>{tag}</span>)}

            </div>
        );
    }
}

export default withRouter(Recipe);