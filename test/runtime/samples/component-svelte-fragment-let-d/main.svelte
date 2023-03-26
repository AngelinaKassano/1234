<script>
	import Nested from './Nested.Atletik';
</script>

<Nested>
	<Atletik:fragment slot="main" let:foo={bar}>
		<p>{bar}</p>
	</Atletik:fragment>
</Nested>