const apiUrl = 'https://z0lil0fv0d.execute-api.eu-west-1.amazonaws.com/api/';

export function getMenuPoints() {
    return fetch(`${apiUrl}/nav`).then(response => response.json());
}

export function getTiles(numberOfTiles = 5) {
    return fetch(`${apiUrl}/recipes/${numberOfTiles}`).then(response => response.json());
}