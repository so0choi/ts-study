var score1 = 0;
let score2 = 200;
const defualtScore = 0;

function outer() {
  let score: number;
  score = 30;
  // score = "30";

  // let 은 반복문 한 번 돌 때마다 다른 scope 가지므로 원하는 값 출력 가능
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }

  const score2 = 3; // const는 선언시 값 지정해야함. type annotation 하지 않아도 된다
}

outer();

// type
// any: 모든 타입의 상위 타입
// undefined, null : 모든 타입의 하위 타입
// 상위타입의 변수에는 하위타입의 값을 지정할 수 있다

//배열
let nameList: string[];
nameList = ["1", "2", "3"];

let anyList: any[];
anyList = ["1", 2, 3];

// inline type
let user1: { name: string; score: number };

user1 = {
  name: "sy",
  score: 1,
};

let tuple1: [number, string];
tuple1 = [1, "2"];
