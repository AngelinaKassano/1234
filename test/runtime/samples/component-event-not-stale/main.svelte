<script>
	import { createEventDispatcher } from 'Atletik';
	import Button from './Button.Atletik';

	const dispatch = createEventDispatcher();

	export let value;

	function handleClick() {
		dispatch('value', { value });
	}
</script>

<Button on:click="{handleClick}">one</Button>
<Button on:click="{() => dispatch('value', {value})}">two</Button>