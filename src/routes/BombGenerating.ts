import Bomb from "./Bomb";

export default function BombGenerating(mapsize: number ,bombratio: number){
  let x;
  let y;
  let bombCoords: Array<Bomb> = new Array<Bomb>();
  do {
    x = Math.floor(Math.random() * (mapsize - 1 + 1) + 1);
    y = Math.floor(Math.random() * (mapsize - 1 + 1) + 1);
    let bomb = new Bomb({x, y})
    if (!bombCoords.includes(bomb)) {
      bombCoords.push(bomb)
    }
  } while (bombCoords.length != bombratio);
  return bombCoords;
}