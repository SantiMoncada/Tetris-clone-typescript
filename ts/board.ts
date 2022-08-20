//https://javilop.com/gamedev/tetris-tutorial-in-c-platform-independent-focused-in-game-logic-for-beginners/
export class Board {
    readonly width: number = 10;
    readonly height: number = 20;
    private board: number[][];
    constructor() {
        this.board = Array(this.height).fill([]).map(() => Array(this.width).fill(0));
        // console.log('constructing');
        // console.log(this.board);
    }
    StorePiece() { }

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