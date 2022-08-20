import { Board } from './board';
import { Tetromino, tetType } from './tetromino';

console.log(Tetromino.getAllTetrominos())


console.log(Tetromino.getAllTetrominos())


const tet = new Tetromino('L');
console.log(tet.getState())

tet.rotateCW()
tet.rotateCW()
tet.rotateCW()
tet.rotateCW()

console.log(tet.getState())