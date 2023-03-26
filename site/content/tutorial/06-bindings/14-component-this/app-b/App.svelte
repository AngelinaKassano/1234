<script>
	import InputField from './InputField.Atletik';

	let field;
</script>

<InputField bind:this={field}/>

<button on:click={() => field.focus()}>Focus field</button>
