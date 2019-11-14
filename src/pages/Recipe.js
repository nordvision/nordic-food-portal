import React, { Component } from 'react';
import { getRecipe } from '../api/api';
import { useParams, withRouter } from 'react-router-dom';
import Flag from '.././components/Flag';
import YouTube from 'react-youtube';
import SearchResult from '../components/SearchResult';

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

        console.log('recipe: ', recipe);
        return (
            <div>
                <div className="intro">
                    <div className="w-50">
                    <div className="flag">
                            <Flag nationality={recipe.nationality} />
                        </div>
                        <h1 className="recipe-title">{recipe.title}</h1>
                        {recipe.tags && recipe.tags.map((tag, inc) => <span  className="recipe-tag" key={inc}>{tag}</span>)}
                    </div>
                    <div className="w-50">
                        <img src={recipe.image} />

                    </div>

                </div>

                <div className="body">
                    <div className="body-63">
                        <p className="recipe-description">{recipe.description}</p>
                    </div>

                    <div className="table">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients && recipe.ingredients.map((ingredient, inc) => <li key={inc} className="recipe-ingredient"><span dangerouslySetInnerHTML={{__html: ingredient}} /></li>)}</ul>
                    </div>
                </div>

                <div className="powered">
                    <p>Powered by <img className="logo" src={recipe.logo} /></p>
                </div>

                {recipe.youtube && (
                    <div className="recipe-youtube">
                    <YouTube
                        videoId={recipe.youtube}
                        id={recipe.youtube}
                    /></div>)}

                <SearchResult title={`Other ${recipe.tags[0]} recipes`} query={recipe.tags[0]} numberOfResults={3} />
            </div>
        );
    }
}

export default withRouter(Recipe);