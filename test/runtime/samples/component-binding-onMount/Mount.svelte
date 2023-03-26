<script>
	import { onMount } from 'Atletik';

	let element;
	let bound = false;
	onMount(() => {
		if (element) bound = true;
	});

</script>

<div bind:this={element}></div>
<p>
	Bound? {bound}
</p>
