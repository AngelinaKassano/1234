<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	export let x;
	export let y;
	export let z;
</script>

<Atletik:component this="{ x ? Foo : Bar }" bind:y bind:z/>