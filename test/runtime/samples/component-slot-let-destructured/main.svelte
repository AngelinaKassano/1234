<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested {things} let:thing="{{ num }}">
	<span>{num}</span>
</Nested>