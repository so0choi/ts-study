interface User {
  name: string;
}

interface Action {
  do(): void;
}

function createUserAction(u: User, a: Action): User & Action {
  // 두 타입을 합쳐서 반환하는 메서드 -> intersection 타입으로 표현
  return { ...u, ...a };
}

const u = createUserAction({ name: "jay" }, { do() {} });
// u에서 자동 완성으로 User 와 Action의 인자들을 출력함

// UNION type
// function overloading으로 오류 방지
function compare(x: string, y: string);
function compare(x: number, y: number);
function compare(x: string | number, y: string | number) {
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
// const v3 = compare ("1", 2) -> 함수 오버로딩 때문에 오류 발생

//type guard
function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined;
}

// interface 의 UNION
function process(v: User | Action) {
  // type에 따라 다른로직 수행 하도록 함
  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
