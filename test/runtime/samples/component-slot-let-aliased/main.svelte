<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested {things} let:thing={x}>
	<span>{x}</span>
</Nested>