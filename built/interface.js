const myTV = {
    on() {
        return true;
    },
    off() { },
};
function tryTuronOn(tv) {
    tv.on();
}
tryTuronOn(myTV);
function createBoard() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            cells.push({
                row,
                col,
            });
        }
    }
    return cells;
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    },
};
