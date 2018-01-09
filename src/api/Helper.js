export function timeout(ms, promise) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error("timeout"))
        }, ms)
        promise.then(resolve, reject)
    })
}

export const fetchData = function(url,option) {
    return fetch(url, option)
        .then(getObjectFromJson)
        .catch(() => undefined);
};

const getObjectFromJson = response => response.json();