<script lang="ts">
  import { onMount } from "svelte";
  let {tile, position, isbomb, bombaround, handleTile} = $props(); 
  let clicked = $state(tile.isRevealed);
  let displayableImage = $state("hidden");
  let changable = true;
  let flagged = $state(false);
  function onClickEvent() {
    if (!flagged) {
      if (isbomb == "bomb") {
        displayableImage = "mine";
      }
      // } else if (changable) {
      //   tile.setIsRevealed = true;
      //   displayableImage = bombaround;
      // }
      if (changable) {
        clicked = true;
        displayableImage = bombaround;
      }
    } 
    handleTile(tile);
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
<button id="{position}, {bombaround}" style="background-image: url(src/images/{displayableImage}.png);" class={isbomb} class:flag={flagged == true} class:active={clicked == false} on:click={() => onClickEvent()} on:contextmenu={() => onRightClickEvent()}></button>
<style>
  button {
    /* background-image: url(src/images/hidden.png); */
    width: 50px;
    height: 50px;
    background-size: contain;
  }

  .active {
    background-image: url(src/images/hidden.png) !important;
  }

  .flag {
    background-image: url(src/images/flag.png) !important;
  }

  .bomb {
    background-image: url(src/images/mine.webp) !important;
  }
</style>
