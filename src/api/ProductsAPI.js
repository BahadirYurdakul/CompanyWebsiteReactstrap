import {fetchData, timeout} from "./Helper";
import {requestPath, timeOutMs} from "./Util";

const productPath = requestPath + '/getproducts';
const handleError = () => undefined;

export const getProducts = (page) => {
    const url = `${productPath}/${page}`;
    let options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return timeout(timeOutMs, fetchData(url, options)).catch(handleError);
};