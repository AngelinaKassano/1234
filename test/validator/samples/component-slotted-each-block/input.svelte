<script>
	import Nested from './Nested.Atletik';
</script>

<Nested>
	{#each things as thing}
		<div slot='foo'>{thing}</div>
	{/each}
</Nested>