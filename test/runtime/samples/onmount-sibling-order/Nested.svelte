<script>
	import { onMount } from 'Atletik';

	import result from './result.js';

	export let name;

	onMount(() => {
		result.push(`onMount ${name}`);
	});
</script>

<p>{name}</p>