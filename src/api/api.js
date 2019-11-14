const apiUrl = 'https://z0lil0fv0d.execute-api.eu-west-1.amazonaws.com/api';

export function getMenuPoints() {
    return fetch(`${apiUrl}/nav`).then(response => response.json());
}

export function getTiles(numberOfTiles = 5) {
    return fetch(`${apiUrl}/recipes/${numberOfTiles}`).then(response => response.json());
}

export function getSearch(query, numberOfResults) {
//    return fetch(`${apiUrl}/search/${query}/${numberOfResults}`).then(response => response.json());
    return fetch(`${apiUrl}/search/${query}`).then(response => response.json());
}

export function getRecipe(id) {
    return fetch(`${apiUrl}/recipe/${id}`).then(response => response.json());
}

export function getRecipeList(list){
    return fetch(`${apiUrl}/get_items/${list.toString()}`).then(response => response.json())
}