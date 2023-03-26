<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	export let condition, foo, bar;
</script>

{#if condition === 1}
	<Foo {foo} />
{:else if condition === 2}
	<Bar {bar} />
{/if}
