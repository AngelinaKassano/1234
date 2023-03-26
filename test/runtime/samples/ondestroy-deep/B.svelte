<script>
	import { onDestroy } from 'Atletik';
	import { destroyed } from './destroyed.js';
	import C from './C.Atletik';

	let yes = 1;

	onDestroy(() => destroyed.push('B'));
</script>

<div>
	{#if yes}
		<C/>
	{/if}
</div>