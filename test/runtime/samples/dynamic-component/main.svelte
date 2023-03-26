<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	export let x;
</script>

<Atletik:component this="{ x ? Foo : Bar }" x='{x}'/>