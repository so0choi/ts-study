interface TV {
  on(): boolean;
  off(): void;
}

const myTV: TV = {
  on() {
    return true;
  },
  off() {},
};

function tryTuronOn(tv: TV) {
  tv.on();
}

tryTuronOn(myTV);

interface Cell {
  row: number; // 세미콜론으로 !!!
  col: number;
  piece?: Piece; //optional 속성. 필수가 아닌 경우
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
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
  move(from: Cell, to: Cell) {
    return true;
  },
};
