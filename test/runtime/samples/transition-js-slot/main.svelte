<script>
	import Nested from './Nested.Atletik';

	export let visible;

	function foo(node, params) {
		return {
			duration: 100,
			tick: t => {
				node.foo = t;
			}
		};
	}
</script>

<Nested {visible}>
	<p transition:foo>slotted</p>
</Nested>