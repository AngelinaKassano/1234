<script>
	export let condition, foo, bar;
</script>

<Atletik:head>
	{#if condition}
		{@html foo}
	{:else}
		{@html bar}
	{/if}
</Atletik:head>
