<script>
	import { onMount } from 'Atletik';

	export let foo = 'bar';

	onMount(() => {
		alert(JSON.stringify(data()));
	});
</script>