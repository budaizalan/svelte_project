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
    
  for (let x = 1; x < mapSize + 1; x++) {
    for (let y = 1; y < mapSize + 1; y++) {
      tilesList.push(
        new Tile(false, 0, {
          x,
          y,
        }, false)
      );
    }
  }

  bombList.forEach((element) => {
    let bombSpot = tilesList.find((x) => x.position.x == element.position.x && x.position.y == element.position.y)?.position;
    let x = element.position.x;
    let y = element.position.y;
    tilesList.splice(
      tilesList.indexOf(tilesList.find((y) => y.position.x == bombSpot?.x && y.position.y == bombSpot?.y)),
      1,
      new Tile(true, 0, {
        x,
        y,
      }, false)
    );
  });
  bombList.forEach((tile) => {
    let currentBomb = tilesList.find((x) => x.position.x == tile.position.x && x.position.y == tile.position.y);
    let tryAbove = tilesList.find((x) => x.position.x == currentBomb?.position.x - 1 && x.position.y == currentBomb?.position.y && x.isBomb == false);
    if (tryAbove) tryAbove.nearbyBombs = 1;
    let tryUnder = tilesList.find((x) => x.position.x == currentBomb?.position.x + 1 && x.position.y == currentBomb?.position.y && x.isBomb == false);
    if (tryUnder) tryUnder.nearbyBombs = 1;
    let tryLeft = tilesList.find((x) => x.position.x == currentBomb?.position.x && x.position.y == currentBomb?.position.y - 1 && x.isBomb == false);
    if (tryLeft) tryLeft.nearbyBombs = 1;
    let tryRight = tilesList.find((x) => x.position.x == currentBomb?.position.x && x.position.y == currentBomb?.position.y + 1 && x.isBomb == false);
    if (tryRight) tryRight.nearbyBombs = 1;
    let tryTopLeft = tilesList.find((x) => x.position.x == currentBomb?.position.x - 1 && x.position.y == currentBomb?.position.y - 1 && x.isBomb == false);
    if (tryTopLeft) tryTopLeft.nearbyBombs = 1;
    let tryAboveRight = tilesList.find((x) => x.position.x == currentBomb?.position.x - 1 && x.position.y == currentBomb?.position.y + 1 && x.isBomb == false);
    if (tryAboveRight) tryAboveRight.nearbyBombs = 1;
    let tryBottomLeft = tilesList.find((x) => x.position.x == currentBomb?.position.x + 1 && x.position.y == currentBomb?.position.y + 1 && x.isBomb == false);
    if (tryBottomLeft) tryBottomLeft.nearbyBombs = 1;
    let tryRightUnder = tilesList.find((x) => x.position.x == currentBomb?.position.x + 1 && x.position.y == currentBomb?.position.y - 1 && x.isBomb == false);
    if (tryRightUnder) tryRightUnder.nearbyBombs = 1;
  });

  function handleTile(tile: Tile) {
    let currentTile = tilesList.find((x) => x.position.x == tile.position.x && x.position.y == tile.position.y);
    currentTile!.isRevealed = true;
    let tryAbove = tilesList.find((x) => x.position.x == currentTile?.position.x - 1 && x.position.y == currentTile?.position.y && x.isBomb == false);
    if(tryAbove) tryAbove.isRevealed = true;

  }
  console.log("bobmlist", bombList);
  console.log("tilesList", tilesList); 
  
  function helper() {
    console.log(tilesList);
  }
</script>

<div class="holder">
  {#each tilesList as i}
    <Tiles tile={i} handleTile={handleTile} helper={helper}/>
  {/each}
</div>

<!-- <div>{{props.id}}</div> -->

<style>
  .holder {
    margin: auto;
    margin-top: 5%;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    position: relative;
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    background-color: #14121c;
    border-radius: 5px;
  }
</style>
