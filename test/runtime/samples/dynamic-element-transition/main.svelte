<script>
	export let tag = "h1";
	export let visible;

	function foo() {
		return {
			duration: 100,
			css: t => {
				return `opacity: ${t}`;
			}
		};
	}
</script>

{#if visible}
	<Atletik:element this={tag} transition:foo></Atletik:element>
{/if}
