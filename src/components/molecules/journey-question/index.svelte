<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import InputText from "../../atoms/input-text.svelte";
  import InputButton from "../../atoms/input-button.svelte";

  export let question: string = "?";
  export let answer: string = "?";
  
  const dispatch = createEventDispatcher();

  const progress = () => {
      dispatch("progress", {})
  }
</script>

<div>
  <div data-testid="question">{question}</div>
  <InputText bind:value={answer} />
  <InputButton on:click={progress} />
</div>
