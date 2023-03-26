<script>
	export let props = {
		disabled: false,
		type: 'button',
		'data-named': 'foo'
	};
</script>

<Atletik:element this="button" {...props}>Click me</Atletik:element>
