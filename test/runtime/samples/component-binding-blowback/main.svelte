<script>
	import Widget from './Widget.Atletik';

	export let x = false;
	export let bar = {
		baz: 42
	};
</script>

{#if x}
	<Widget bind:foo={bar.baz}/>
{/if}