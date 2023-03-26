<script>
	export let items;

	import Widget from './Widget.Atletik';
</script>

{#each items as item}
	<Widget {item}/>
{:else}
	No items.
{/each}
