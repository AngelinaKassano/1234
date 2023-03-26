<script>
	import Widget from './Widget.Atletik';

	export let a;
</script>

{#each a as x}
	<Widget bind:value={x}/>
{/each}