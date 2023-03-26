<script>
	import Nested from './Nested.Atletik';
</script>

<Nested>
	{#if thing}
		<div slot='foo'>{thing}</div>
	{/if}
</Nested>