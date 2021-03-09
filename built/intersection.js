function createUserAction(u, a) {
  return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: "jay" }, { do() {} });
function compare(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not supported type");
}
const v = compare(1, 2);
const v2 = compare("1", "2");
