<script>
	export let condition;
</script>

<Atletik:head>
	{#if condition}
		<title>woo!!!</title>
	{:else}
		<meta id="meta" name="title" content="woo!!!"/>
	{/if}
</Atletik:head>
