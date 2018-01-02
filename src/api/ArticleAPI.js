const ArticlePath = 'http://10.8.51.198:9000/articles';
const apigiphypath = 'https://api.giphy.com/v1/gifs/random';


const getObjectFromJson = response => response.json();
const responseStringify = response => JSON.stringify(response);

const nullIfNotOk = (response) => {
    if (!response.ok) {
        alert(response.status);
        return null;
    }
    return response;
};

const sleep = (msecs) => (
    results => new Promise(resolve => setTimeout(() => resolve(results), msecs))
);


const getArticles = (page) => {
    const url = `${ArticlePath}/getarticles/page/${page}`;

    return fetch(url)
        .then(getObjectFromJson)
        .then(nullIfNotOk)
        .then(responseStringify)
        .catch(function(err) {
            alert(err)
        })
};

const getArticle = (title) => {
    const url = `${ArticlePath}//getarticalinfo/title/${title}`

    return fetch(url, {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': 'http://localhost:9000'
        })
    })
        .then(getObjectFromJson)
        .then(nullIfNotOk)
        .then(responseStringify)
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
        mode: 'no_cors',
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    })
        .then(getObjectFromJson)
        .then(responseStringify)
        .catch(function(err) {
            return null;
        })
};

export default module = {
    getArticles: getArticles,
    loadGiphy: loadGiphy,
    getArticle: getArticle
}
