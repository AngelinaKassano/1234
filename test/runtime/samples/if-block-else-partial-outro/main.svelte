<script>
	export let y = false;
	export let x = 'x';

	import Foo from './Foo.Atletik';
</script>

{#if y}
	<Foo/>
{:else}
	<span>{x}</span>
{/if}