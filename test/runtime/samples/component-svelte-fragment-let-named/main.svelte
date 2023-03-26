<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested {things}>
	<div slot="foo" let:thing>
		<span>{thing}</span>
	</div>
</Nested>