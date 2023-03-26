<script>
	import { onDestroy, onMount } from 'Atletik';

	export let events;

	onMount(() => {
		events = ['mount'];

		return () => {
			events.push('destroy');
		};
	});
</script>

<div></div>