<script lang="ts">
  // @ts-nocheck
  import Tiles from "./Tiles.svelte";
  import Tile from "./Tile.js";
  import BombGenerating from "./BombGenerating.js";
  import Bomb from "./Bomb.js";

  let mapSize = 13;

  let bombRatio = Math.pow(Math.floor(mapSize / 2), 2);

  let bombList = BombGenerating(mapSize, bombRatio);
  let tilesList: Array<Tile> = Array<Tile>();
  let aight = true;
  for (let x = 1; x < mapSize + 1; x++) {
    for (let y = 1; y < mapSize + 1; y++) {
      bombList.forEach((element) => {
        if (element.position.x == x && element.position.y == y) {
          tilesList.push(new Tile(true, 1, { x, y }));
          !aight;
        }
      });
      if (aight) tilesList.push(new Tile(false, 1, { x, y }));
    }
  }
  let db = 0;
  tilesList.forEach((element) => {
    if (element.isBomb) {
      console.log(tilesList[tilesList.indexOf(element)].position);
    }
    if (element.isBomb) {
      db++;
    }
  });
  console.log(db);
  // console.log(tilesList);
</script>

<div class="holder" style="width: 35%; margin:auto">
  {#each tilesList as i}
    <Tiles
      position="{i.position.x};{i.position.y}"
      isbomb={i.isBomb == true ? true : false}
    />
  {/each}
</div>