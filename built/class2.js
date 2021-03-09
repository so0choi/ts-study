class KoreanProgrammer {
    constructor(name) {
        this.name = name;
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + ".......";
    }
    say(message) {
        console.log(message);
    }
    loveRamen() {
        console.log("I wanna eat ramen");
    }
}
const sy = new KoreanProgrammer("sy");
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgrammer2 extends Korean {
    constructor(name, jumin) {
        super(name);
        this.name = name;
        this.jumin = jumin;
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + ".......";
    }
    say(message) {
        console.log(message);
    }
    loveRamen() {
        console.log("wanna eat ramen");
    }
}
