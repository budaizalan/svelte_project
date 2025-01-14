<script lang="ts">
  import { onMount } from 'svelte';
  let props = $props();
  let clicked = $state(false);
  let rightClicked = $state(false);
  let displayableImage = $state("hidden");
  let changable = true;
  let geci = props.bombaround;
  let flagged = $state(false);
  function onClickEvent() {
    if(props.isbomb == "bomb"){
      displayableImage = "mine";
    } else if (changable) {
      clicked = true;
      displayableImage = props.bombaround
    }
    if (changable) {
      clicked = true;
      displayableImage = props.bombaround
    }
  }

  function onRightClickEvent() {
      changable = !changable;
      flagged = !flagged;
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
   id="{props.position}, {props.bombaround}"
   style="background-image: url(src/images/{displayableImage}.png);"
   class="{props.isbomb}"
   class:flag={flagged == true}
   class:active={clicked == false}
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
    background-image: url(src/images/hidden.png) !important;
  }

  .flag{
    background-image: url(src/images/flag.png) !important;
  }

  .bomb {
    background-image: url(src/images/mine.webp) !important;
  }
</style>
