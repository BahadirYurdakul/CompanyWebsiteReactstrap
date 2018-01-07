const accountPath = 'http://localhost:9000/accounts';

const getObjectFromJson = response => response.json();
const handleError = err => undefined;

const nullIfNotOk = (response) => {
    if (response.status !== 200) {
        return undefined;
    }
    return response;
};
const signUp = (accountInfo) => {
    let payload = {
        username: "bahadir",
        password: "1234",
        email: "sfal@mail.com",
        telephone: "05555555555",
        companyName: "asnckaln",
        companyAddress: "Gıjojıjl",
        title: "student",
        nameSurname: "Bahadır Yurdakul"
    };

    const url = `${accountPath}/signup`;
    return fetch(url, {
        method: "PUT",
        body: JSON.stringify(payload)
    })
        .then(getObjectFromJson)
        .then(nullIfNotOk)
        .catch(handleError);
};

export default module = {
    signUp: signUp,
}