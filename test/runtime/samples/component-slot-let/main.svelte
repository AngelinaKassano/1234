<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested {things} let:thing>
	<span>{thing}</span>
</Nested>