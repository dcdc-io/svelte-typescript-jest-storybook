<script>
  import { createEventDispatcher } from "svelte";

  export let value = ""

//   const dispatch = createEventDispatcher();

//   const fireChange = (event) => {
//     dispatch('change', value);
//   };

//   $: value, dispatch("change", { value })

</script>

<style>
  .input {
    border: 1px solid red;
  }
</style>

<input class="input" type="text" bind:value={value} />
