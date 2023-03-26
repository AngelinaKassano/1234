<script>
	export let bar;
</script>

<Atletik:head>
	<meta id="meta" name="title" content="bar!!!"/>
	{#if true}
		{@html bar}
	{/if}
	<title>bar!!!</title>
</Atletik:head>
