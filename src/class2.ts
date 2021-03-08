interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {
  constructor(public name: string) {}
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + ".......";
  }
  say(message: string): void {
    console.log(message);
  }

  loveRamen() {
    console.log("I wanna eat ramen");
  }
}

const sy = new KoreanProgrammer("sy");

abstract class Korean implements Person {
  //인스턴스 만들기 불가
  public abstract jumin: number;
  constructor(public name: string) {}
  say(message: string): void {
    console.log(message);
  }
  abstract loveRamen(): void;
}

class KoreanProgrammer2 extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    super(name); //abstract class 상속받는 경우 필요
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + ".......";
  }
  say(message: string): void {
    console.log(message);
  }

  loveRamen() {
    console.log("wanna eat ramen");
  }
}
