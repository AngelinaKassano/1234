<script>
	import Nested from './Nested.Atletik';
</script>

<Nested let:count>
	<Atletik:fragment slot="main">
		<span>{count}</span>
	</Atletik:fragment>
</Nested>