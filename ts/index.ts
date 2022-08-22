import { Board } from './board';
import { Tetromino, tetType } from './tetromino';



const test = new Board();

console.log(test.getBoardString())
const tet = new Tetromino('Z').getState();
test.storePiece(tet, 8, 0, 7);
console.log(test.getBoardString())
