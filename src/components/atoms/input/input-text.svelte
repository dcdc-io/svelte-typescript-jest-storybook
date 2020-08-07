<script lang="ts">
  export let value!:string
</script>

<style>
  .input {
    border: 1px solid red;
  }
</style>

<input data-testid="input-text" class="input" type="text" bind:value={value} />
