<script lang="ts">
  import { onMount } from 'svelte';
  let props = $props();
  let clicked = $state(false);
  let rightClicked = $state(false);
  let displayableImage = $state("hidden");
  let changable = true;

  // @ts-ignore
  function onClickEvent() {
    if (changable) {
      clicked = true;
      displayableImage = props.adjective;
    }
  }

  function onRightClickEvenet() {
    if (changable) {
      rightClicked = true;
      if (displayableImage != "flag") displayableImage = "flag";
      else displayableImage = "hidden";
      changable = !changable;
    }
  }

  onMount(() => {
    // document.createElement(...);
    document.addEventListener(
      "contextmenu",
      (e) => e?.cancelable && e.preventDefault()
    );
  });
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore event_directive_deprecated -->
   <button
   id="{props.niggo}"
   style="background-image: url(src/images/{displayableImage}.png);"
   class="{props.isbomb == true ? "bomb": "tile"}"
   class:active={clicked == true}
   on:click={() => onClickEvent()}
   on:contextmenu={() => onRightClickEvenet()}
   ></button>

<style>
  button {
    background-image: url(src/images/hidden.png);
    width: 50px;
    height: 50px;
    background-size: contain;
  }

  .bomb {
    background-image: url(src/images/8.png) !important;
  }
</style>
