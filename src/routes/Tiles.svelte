<script lang="ts">
  import { onMount } from "svelte";
  let {tile, handleTile, helper} = $props(); 
  let clicked = $state(tile.isRevealed); 
  let flagged = $state(false);
  console.log(clicked);
  console.log(tile.isRevealed);
  
  function onClickEvent() {
    tile.isRevealed = true;
    handleTile(tile);
    helper();
    console.log(tile);
    
  }

  function onRightClickEvent() {
    if (clicked == false) flagged = !flagged;
    else flagged = false;
  }

  onMount(() => {
    document.addEventListener("contextmenu", (e) => e?.cancelable && e.preventDefault());
  });
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore event_directive_deprecated -->
<!-- <button id="{tile.position}, {tile.bombaround}" style="background-image: url(src/images/{displayableImage}.png);" class={tile.isbomb} class:flag={flagged == true} class:active={clicked == false} on:click={() => onClickEvent()} on:contextmenu={() => onRightClickEvent()}></button> -->
 <button style="background-image: url(src/images/{tile.nearbyBombs}.png);" class:unclicked={tile.isRevealed} class:bomb={tile.isBomb} on:click={onClickEvent} on:contextmenu={onRightClickEvent}></button>
<style>
  button {
    /* background-image: url(src/images/hidden.png); */
    width: 50px;
    height: 50px;
    background-size: contain;
  }

  .unclicked {
    background-image: url(src/images/hidden.png) !important;
  }

  .flag {
    background-image: url(src/images/flag.png) !important;
  }

  .bomb {
    background-image: url(src/images/mine.webp) !important;
  }
</style>
