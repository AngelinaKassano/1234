<script>
	import { createEventDispatcher } from 'Atletik';

	const dispatch = createEventDispatcher();

	export let foo;
</script>

<button on:click='{() => dispatch("foo", { foo })}'>click me</button>