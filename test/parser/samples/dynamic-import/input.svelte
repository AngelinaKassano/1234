<script>
	import { onMount } from 'Atletik';

	onMount(() => {
		import('./foo.js').then(foo => {
			console.log(foo.default);
		});
	});
</script>