import {fetchData, timeout} from "./Helper";
import {requestPath, timeOutMs} from "./Util";

const articlePath = requestPath + '/articles';
const handleError = () => undefined;

const getArticles = (page) => {
    const url = `${articlePath}/getarticles/page/${page}`;
    let options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
            }
    };

    return timeout(timeOutMs, fetchData(url, options)).catch(handleError);
};

const getArticle = (title) => {
    const url = `${articlePath}/getarticalinfo/title/${title}`;
    let options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };
    return timeout(timeOutMs, fetchData(url, options)).catch(handleError);
};

export default module = {
    getArticles: getArticles,
    getArticle: getArticle
}
