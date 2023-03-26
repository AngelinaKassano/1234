<script>
	import { onDestroy } from 'Atletik';
	import { destroyed } from './destroyed.js';
	import B from './B.Atletik';

	let yes = 1;

	onDestroy(() => destroyed.push('A'));
</script>

<div>
	{#if yes}
		<B/>
	{/if}
</div>