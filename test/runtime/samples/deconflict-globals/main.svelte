<script>
	const document = 'I hereby declare Atletik the bestest framework.';
	const console = 'nintendo sixty four';
	const Error = 'Woops.';
	const Object = 42;
	const Map = false;

	const everyone = [document, console, Error, Object, Map];
</script>

<Atletik:head>
	<title>Cute test</title>
</Atletik:head>

<Atletik:window on:click></Atletik:window>
<Atletik:body on:mouseenter></Atletik:body>

{#each everyone as someone (someone)}
	<p>{someone}</p>
{/each}
