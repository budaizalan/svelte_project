<script lang="ts">
  // @ts-nocheck
  import { range } from "../range.js";
  import Tiles from "./Tiles.svelte";
  import Tile from "./Tile.js";
  import { onMount } from "svelte";
  import BombGenerating from "./BombGenerating.js";
  import Bomb from "./Bomb.js";

  const bombList = BombGenerating();
  let bombsXPosition: Array<number> = Array<number>();
  let bombsYPosition: Array<number> = Array<number>();
  bombList.forEach((element) => {
    bombsXPosition.push(element.position.x);
    bombsYPosition.push(element.position.y);
  });
  let tiles: Array<Tile> = new Array<Tile>();
  let tilesRows: Array<Array<Tile>> = new Array<Array<Tile>>();
  for (let x = 1; x < 15; x++) {
    for (let y = 1; y < 16; y++) {
      // if (!bombsXPosition.includes(x)) {
      //   let tile = new Tile(false, 3, { x, y });
      //   tiles.push(tile);
      // }
      //   else {
      //   if (!bombsYPosition.includes(y)) {
      //     let tile = new Tile(false, 3, { x, y });
      //     tiles.push(tile);
      //   } else {

      //     let tile = new Tile(true, 3, { x, y });
      //     tiles.push(tile);
      //   }
      // }
      let tile = new Tile(false, 1, { x, y });
      tiles.push(tile);
    }
    tilesRows.push(tiles);
    tiles = [];

    onMount(()=> {
      console.log("Ok");
      
    })
  }
</script>

<div class="holder" style="width: 80%; margin:auto">
  <!-- <Title1 adjective="nigg"/> -->
  {#each tilesRows as tile}
    {#each tile as i}
      <Tiles
        adjective={6}
        niggo="{i.position.x};{i.position.y == 3 ? 3 : 2}"
        isbomb={i.isBomb == true ? true : false}
      />
    {/each}
  {/each}
</div>
