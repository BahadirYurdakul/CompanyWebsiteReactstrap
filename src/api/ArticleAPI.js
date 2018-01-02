const ArticlePath = 'http://10.8.51.198:9000/articles';
const apigiphypath = 'https://api.giphy.com/v1/gifs/random';

const getObjectFromJson = response => response.json();
const responseStringify = response => JSON.stringify(response);

const nullIfNotOk = (response) => {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        return null;
    }
    return response;
};

let fetchData = function(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(getObjectFromJson)
        .catch(function(err) {
            alert(err)
        });
}

const getArticles = (page) => {
    const url = `${ArticlePath}/getarticles/page/${page}`;
    return fetchData(url);
};

const getArticle = (title) => {
    const url = `${ArticlePath}//getarticalinfo/title/${title}`;
    fetchData(url);
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
    getArticle: getArticle
}
