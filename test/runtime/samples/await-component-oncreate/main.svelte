<script>
	import Foo from './Foo.Atletik';

	export let promise;
</script>

{#await promise then value}
	<Foo {value} />
{/await}