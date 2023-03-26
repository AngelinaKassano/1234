<script>
	import Widget from './Widget.Atletik';

	export let bar;
	export let x;
	export let compound;
	export let go;
</script>

<div>
	<Widget foo='{bar}' baz='{40 + x}' qux='this is a {compound} string' quux='{go.deeper}'/>
</div>
