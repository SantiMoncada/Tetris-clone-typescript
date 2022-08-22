//https://javilop.com/gamedev/tetris-tutorial-in-c-platform-independent-focused-in-game-logic-for-beginners/
export class Board {
    readonly width: number = 10;
    readonly height: number = 20;
    private board: number[][];
    constructor() {
        this.board = Array(this.height).fill([]).map(() => Array(this.width).fill(0));
    }
    storePiece(piece: number[][], posX: number, posY: number, color: number) {
        piece.forEach((col, i) => {
            col.forEach((value, j) => {
                if (value !== 0) {
                    console.log((j + posX), (this.width - 1))
                    if (j + posX > this.width - 1 || i + posY > this.height) {
                        throw Error(`Piece is out of board index ${i + posY} ${j + posX}`);
                    }
                    this.board[i + posY][j + posX] = color;
                }
            })
        })
    }

    IsGameOver() { }

    DeleteLine() { }

    DeletePossibleLines() { }

    IsFreeBlock() { }

    IsPossibleMovement() { }

    getBoardString() {
        let output: string = "";
        this.board.forEach(row => {
            output += `${row.join('')} \n`
        })
        return output;
    }
}