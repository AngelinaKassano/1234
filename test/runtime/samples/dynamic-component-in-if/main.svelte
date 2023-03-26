<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	export { Bar };
	export let x = Foo;
</script>

{#if x}
	<Atletik:component this={x}/>
{/if}