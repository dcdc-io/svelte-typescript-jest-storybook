<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const click = () => {
    dispatch("click", {});
  };
</script>

<style>
  .input {
    border: 1px solid red;
  }
</style>

<input class="input" type="button" on:click={click} />
