<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested {things} let:thing={x}>
	<Atletik:fragment slot="main">
		<span>{x}</span>
	</Atletik:fragment>
</Nested>