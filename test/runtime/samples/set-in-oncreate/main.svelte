<script>
	import { onMount } from 'Atletik';

	export let foo = 1;

	onMount(() => {
		foo = 2;
	});
</script>

<p>{foo}</p>
