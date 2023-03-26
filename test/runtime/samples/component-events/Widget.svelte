<script>
	import { onDestroy, createEventDispatcher } from 'Atletik';

	const dispatch = createEventDispatcher();

	onDestroy(() => {
		dispatch('destroy');
	});
</script>

<p>i am a widget</p>