<script>
  import { createEventDispatcher } from "svelte";

  export let value
</script>

<style>
  .input {
    border: 1px solid red;
  }
</style>

<input data-testid="input-text" class="input" type="text" bind:value={value} />
