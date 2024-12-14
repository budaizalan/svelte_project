<script lang="ts">
  import { onMount } from 'svelte';
  let props = $props();
  let clicked = $state(false);
  let rightClicked = $state(false);
  let displayableImage = $state("hidden");
  let changable = true;
  let geci = props.bombaround;
  function onClickEvent() {
    if (changable) {
      clicked = true;
      displayableImage = props.bombaround
    }
  }

  function onRightClickEvent() {
      rightClicked = true;
      if (displayableImage != "flag") displayableImage = "flag";
      else displayableImage = "hidden";
      changable = !changable;
  }

  onMount(() => {
    document.addEventListener(
      "contextmenu",
      (e) => e?.cancelable && e.preventDefault()
    );
  });
</script>
   <!-- svelte-ignore a11y_consider_explicit_label -->
   <!-- svelte-ignore event_directive_deprecated -->
   <button
   id="{props.position}, {geci}"
   style="background-image: url(src/images/{geci}.png);"
   class="{props.isbomb}"
   class:active={clicked == true}
   on:click={() => onClickEvent()}
   on:contextmenu={() => onRightClickEvent()}
   ></button>

<style>
  button {
    background-image: url(src/images/hidden.png);
    width: 50px;
    height: 50px;
    background-size: contain;
  }

  .active{
    background-image: url(src/images/8.png) !important;

  }
  .bomb {
    background-image: url(src/images/mine.webp) !important;
  }
</style>
