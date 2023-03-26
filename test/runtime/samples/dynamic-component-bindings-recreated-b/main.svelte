<script>
	import Green from './Green.Atletik';
	import Red from './Red.Atletik';

	export let foo;
	export let x;
</script>

<p>parent {foo}</p>
<Atletik:component this="{x ? Green : Red}" bind:foo />