<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';
	import Baz from './Baz.Atletik';

	export let y;
	export let x;
</script>

<p>y: {y}</p>

{#if x}
	<Foo bind:y/>
{:else}
	<Bar bind:y/>
{/if}

<Baz bind:x/>