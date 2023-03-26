<script>
	import Widget from './Widget.Atletik';
	const values = ['foo', 'bar'];
</script>

{#each values as value}
	<Widget bind:value/>
{/each}
