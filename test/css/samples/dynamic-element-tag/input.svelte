<script>
	export let element = 'div';
</script>

<Atletik:element this={element} />

<h2>
	<Atletik:element this={element}>
		<b>text</b>
	</Atletik:element>
</h2>

<style>
	div {
		color: red;
	}
	h2 > p {
		color: red;
	}
	h2 span {
		color: red;
	}
	h2 > span > b {
		color: red;
	}
	h2 span b {
		color: red;
	}
	h2 b {
		color: red;
	}
</style>
