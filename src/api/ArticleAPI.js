const ArticlePath = 'http://localhost:9000/articles';
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
            console.log(err);
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

export default module = {
    getArticles: getArticles,
    getArticle: getArticle
}
