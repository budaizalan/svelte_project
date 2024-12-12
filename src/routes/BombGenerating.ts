import Bomb from "./Bomb";

export default function BombGenerating(){
  let x;
  let y;
  let bombCoords: Array<Bomb> = new Array<Bomb>();
  do {
    x = Math.floor(Math.random() * (15 - 1 + 1) + 1);
    y = Math.floor(Math.random() * (16 - 1 + 1) + 1);
    let bomb = new Bomb({x, y})
    bombCoords.push(bomb)
  } while (bombCoords.length != 10);
  return bombCoords;
}