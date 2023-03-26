<script>
	import Nested from './Nested.Atletik';

	export let foo;
</script>

<Nested>
	{#if foo}
		<p>conditional</p>
	{/if}

	<p>unconditional</p>
</Nested>