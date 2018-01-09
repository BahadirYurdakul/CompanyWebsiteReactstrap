import {requestPath, timeOutMs} from "./Util";
import {fetchData, timeout} from "./Helper";

const tokenPath = requestPath + '/tokens';
const handleError = () => undefined;

export const getToken = (usernamePassword) => {
    const url = `${tokenPath}`;
    let options = {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: JSON.stringify(usernamePassword)
    };
    return timeout(timeOutMs, fetchData(url, options)).catch(handleError);
};