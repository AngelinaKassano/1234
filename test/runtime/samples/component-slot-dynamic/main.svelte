<script>
	import Nested from './Nested.Atletik';

	export let nested;
</script>

<Nested bind:this={nested}>
	<p>override default slot</p>
</Nested>