<script>
	const a = 'a';
	const span = 'span';
</script>

<Atletik:element this={a} class='outer' on:keydown on:keyup>
	<Atletik:element this={span} class='inner' on:keydown on:keyup />
</Atletik:element>
