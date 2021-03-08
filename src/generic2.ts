interface DB<T> {
  add(v: T): void;
  get(): T;
}

class D<T> implements DB<T> {
  // interface 의 제네릭은 이를 구현하는 구현체에서도 제네릭을 받아와야 한다
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

interface JSONSerializer {
  serialize(): string;
}

class LocalDB<T extends JSONSerializer> implements DB<T> {
  constructor(private localStorageKey: string) {}
  add(v: T) {
    localStorage.setItem(this.localStorageKey, v.serialize());
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

// interface User {name: string}

// const userDb = new LocalDB<User>("user");
// userDb.add({name: "jay"});
// const userA = userDb.get()

// 조건부 타입

interface Vegitable {
  v: string;
}
interface Meat {
  m: string;
}
interface Cart2<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart3: Cart2<string> = {
  getItem() {
    return { m: "" }; // required Meat interface
  },
};

const cart4: Cart2<Vegitable> = {
  getItem() {
    return { v: "" }; // required Vegitable interface
  },
};
