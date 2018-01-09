const ArticlePath = 'http://localhost:9000/articles';
const getObjectFromJson = response => response.json();

let fetchData = function(url) {

    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(getObjectFromJson)
        .catch(() => undefined);
};

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
