<script>
	import Foo from './Foo.Atletik';
	export let tag = "h1";
</script>

<Foo>
	<Atletik:element this={tag}>This is default slot</Atletik:element>
	<Atletik:element this={tag} slot='other'>This is other slot</Atletik:element>
</Foo>

