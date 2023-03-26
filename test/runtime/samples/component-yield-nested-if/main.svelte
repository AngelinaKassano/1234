<script>
	import Outer from './Outer.Atletik';
	import Inner from './Inner.Atletik';

	export let foo = true;
</script>

<Outer {foo}>
	One
	<Inner/>
</Outer>