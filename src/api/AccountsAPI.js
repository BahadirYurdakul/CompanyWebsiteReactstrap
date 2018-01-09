import {requestPath} from "./Util";

const accountPath = requestPath + '/accounts';

const signUp = (accountInfo) => {
    const url = `${accountPath}/signup`;
    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(accountInfo)
    })
        .then(response => response.status)
};

export default module = {
    signUp: signUp,
}