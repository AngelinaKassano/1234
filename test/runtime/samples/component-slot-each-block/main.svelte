<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested>
	{#each things as thing}
		<span>{thing}</span>
	{/each}
</Nested>