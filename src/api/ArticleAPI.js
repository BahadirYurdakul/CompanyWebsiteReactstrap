const ArticlePath = 'https://localhost:9000/getarticles/';
const apigiphypath = 'https://api.giphy.com/v1/gifs/random';
const getObjectFromJson = response => response.json();

const nullIfNotOk = (response) => {
    if (!response.ok) {
        return null;
    }
    return response;
};

const sleep = (msecs) => (
    results => new Promise(resolve => setTimeout(() => resolve(results), msecs))
);

const getArticles = (page) => {
    const url = `127.0.0.1:9000/getarticles/0`

    return fetch(url, {
        method: 'GET',
    })
        .then(getObjectFromJson)
        .then(nullIfNotOk)
        .catch(function(err) {
            alert(err)
        })
};

const getUrl = response => response.data.fixed_height_downsampled_url;

const loadGiphy = (query) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `${apigiphypath}?api_key=hdjYwawHd0qFt5l8DqgH27akdJSHKJbE&tag=${encodedQuery}`;
    const url2 = `http://api.giphy.com/v1/gifs/search?q=dog
        &api_key=hdjYwawHd0qFt5l8DqgH27akdJSHKJbE&limit=1`;

    return fetch(url2, {
        method: 'get',
    })
        .then(getObjectFromJson)
        .then((response) => {
            return JSON.stringify(response);
        }).catch(function(err) {
            return null;
        })
};

export default module = {
    getArticles: getArticles,
    loadGiphy: loadGiphy
}
