function createPromise<T>(x: T, timeout: number) {
  // type의 파라미터화
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

createPromise("1", 100).then((v) => console.log(v));

function createTuple<T, U>(v: T, v2: U): [T, U] {
  return [v, v2];
}

const t1 = createTuple("user", 1000);
