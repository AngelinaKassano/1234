<script context="module">
	let foo;
</script>

<script>
	// Atletik-ignore unused-export-let
	export let unused;
	// Atletik-ignore module-script-reactive-declaration
	$: reactive = foo;
</script>

<!-- Atletik-ignore css-unused-selector -->
<style>
	.unused {}
</style>
