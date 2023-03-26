<script>
	import Green from './Green.Atletik';
	import Red from './Red.Atletik';

	export let x;
	export let foo;
</script>

<Atletik:component this="{x ? Green : Red}" bind:foo />