<script>
	import { onMount } from 'Atletik';

	export let isVisible;

	onMount(() => {
		isVisible = true;
	});
</script>

<div>
	<slot></slot>
</div>
