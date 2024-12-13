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
      tilesList.push(new Tile(false, 1, { x, y }));
    }
  }
  let db = 0;
  // tilesList.forEach((element) => {
  //   if (element.isBomb) {
  //     console.log(tilesList[tilesList.indexOf(element)].position);
  //   }
  //   if (element.isBomb) {
  //     db++;
  //   }
  // });
  bombList.forEach(element => {
    let bombSpot = tilesList.find((x) => x.position.x == element.position.x && x.position.y == element.position.y)?.position;
    let x = element.position.x;
    let y = element.position.y;
    tilesList.splice(tilesList.indexOf(tilesList.find((y) => y.position.x == bombSpot?.x && y.position.y == bombSpot?.y)), 1, new Tile(true, 1, {x, y}));
    
  });
</script>

<div class="holder">
  {#each tilesList as i}
    <Tiles
      position="{i.position.x};{i.position.y}"
      isbomb={i.isBomb == true ? true : false}
    />
  {/each}
</div>

<style>
  .holder {
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    position: relative;
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    background-color: #14121c;
    border-radius: 5px; /* Ezt döntsétek el hogy kell-e */
  }
</style>
