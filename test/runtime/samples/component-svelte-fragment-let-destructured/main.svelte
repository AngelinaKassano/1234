<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

<Nested {things}>
	<Atletik:fragment slot="item" let:thing="{{ num }}">
		<span>{num}</span>
	</Atletik:fragment>
</Nested>