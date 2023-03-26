<script>
	import { onDestroy } from 'Atletik';
	import { destroyed } from './destroyed.js';

	let yes = 1;

	onDestroy(() => destroyed.push('C'));
</script>