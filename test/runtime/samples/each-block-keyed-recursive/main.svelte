<script>
	export let tree;
</script>

{#each tree as item, i (item.id)}
	<div>
		{item.id}
		{#if item.sub}
			<Atletik:self tree={item.sub}/>
		{/if}
	</div>
{/each}
