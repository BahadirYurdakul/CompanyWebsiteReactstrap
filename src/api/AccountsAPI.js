import {requestPath, timeOutMs} from "./Util";
import {fetchData, timeout} from "./Helper";

const accountPath = requestPath + '/accounts';
const handleError = () => undefined;

const signUp = (accountInfo) => {
    const url = `${accountPath}/signup`;
    return timeout(timeOutMs,
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(accountInfo)
        })
    )
        .then(response => response.status).catch(() => 500)
};

export const getAccountInfo = (token) => {
    const url = `${accountPath}/accountinfo`;
    let options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "token": token
        }
    };
    return timeout(timeOutMs, fetchData(url, options)).catch(handleError);
};

export default module = {
    signUp: signUp,
}