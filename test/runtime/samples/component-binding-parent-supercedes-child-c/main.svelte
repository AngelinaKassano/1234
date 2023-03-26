<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	export let a = true;
	export let x;
</script>

<Atletik:component this="{a ? Foo : Bar}" bind:x/>

<p>x in parent: {x}</p>