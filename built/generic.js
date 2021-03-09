function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise("1", 100).then((v) => console.log(v));
function createTuple(v, v2) {
    return [v, v2];
}
const t1 = createTuple("user", 1000);
