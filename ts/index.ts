import { Board } from './board';
import { Tetromino, tetType } from './tetromino';



const tet = new Tetromino('O');
console.log(tet.getState())

tet.rotateACW()
tet.rotateACW()
tet.rotateACW()
tet.rotateACW()

console.log(tet.getState())