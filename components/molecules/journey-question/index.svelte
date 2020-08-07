<script>
import InputText from '../../atoms/input-text.svelte'
import InputButton from '../../atoms/input-button.svelte'

export let question = "?"
export let answer = "?"
</script>

<div>
    <span data-testid="question">{question}</span>
    <InputText bind:value={answer} /> 
    <InputButton />
</div>