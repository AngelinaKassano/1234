<script>
	export let item;
</script>

<Atletik:element this="div" class:active={true}>
	{item.text}
</Atletik:element>

<style>
	.active {
		color: red;
	}
</style>
