<script>
	import Nested from './Nested.Atletik';

	export let foo;
</script>

<Nested>
	<p>unconditional</p>

	{#if foo}
		<p>conditional</p>
	{/if}
</Nested>