<script>
	import { onDestroy } from 'Atletik';
	import container from './container.js';

	let element;

	onDestroy(() => {
		container.div = element;
	});
</script>

<div bind:this={element}></div>
