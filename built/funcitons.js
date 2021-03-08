function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name = "nobody", email = "nothing") {
    return {
        name,
        email,
    };
}
const user = buildUserInfo();
const add2 = (x, y) => x + y;
function store(type) {
    if (type === "cannedFood") {
        return { a: "cannedFood" };
    }
    else if (type === "icecream") {
        return { b: "icecream" };
    }
    else {
        throw new Error("unsupported");
    }
}
const s = store("cannedFood");
//# sourceMappingURL=funcitons.js.map