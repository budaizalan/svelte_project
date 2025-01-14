import Bomb from "./Bomb";

export default function BombGenerating(mapsize: number, bombratio: number) {
  let x;
  let y;
  let bombCoords: Array<Bomb> = new Array<Bomb>();
  let helperBombCoords: String[] = [];
  do {
    x = Math.floor(Math.random() * (mapsize - 1 + 1) + 1);
    y = Math.floor(Math.random() * (mapsize - 1 + 1) + 1);
    let bomb = `${x},${y}`;
    if (!helperBombCoords.includes(bomb)) {      
      helperBombCoords.push(bomb);
    }
  } while (helperBombCoords.length != bombratio);
  helperBombCoords.forEach((bomb) => {
    let coords = bomb.split(",");
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    bombCoords.push(new Bomb({ x, y }));
  });
  return bombCoords;
}
