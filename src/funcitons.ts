function add(x: number, y: number): number {
  return x + y;
}

// add(1,"2")

const result = add(1, 2);

// default 값 줄 경우 type annotation 필요없음
function buildUserInfo(name = "nobody", email = "nothing") {
  return {
    name,
    email,
  };
}

//익명의 유저는 name, email 사용하지 않을 경우 optional (?) 속성 줄수있다
const user = buildUserInfo();

const add2 = (x: number, y: number): number => x + y;

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}

// 함수 오버로드 시그니처 : 같은 이름으로 서로 다른 return type 가지도록 하는 것
function store(type: "icecream"): ColdStorage;
function store(type: "cannedFood"): Storage;

// 구현체
function store(type: "cannedFood" | "icecream") {
  if (type === "cannedFood") {
    return { a: "cannedFood" };
  } else if (type === "icecream") {
    return { b: "icecream" };
  } else {
    throw new Error("unsupported");
  }
}

const s = store("cannedFood");
