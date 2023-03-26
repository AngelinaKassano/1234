<script>
	import Nested from './Nested.Atletik';
</script>

<Nested>
	<Atletik:fragment slot="main" let:c let:count>
		<span>{c} ({count})</span>
	</Atletik:fragment>
</Nested>