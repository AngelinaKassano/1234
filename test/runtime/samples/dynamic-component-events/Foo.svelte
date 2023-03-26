<script>
	import { createEventDispatcher } from 'Atletik';

	const dispatch = createEventDispatcher();
</script>

<button on:click='{() => dispatch("select", { id: "foo" })}'>select foo</button>