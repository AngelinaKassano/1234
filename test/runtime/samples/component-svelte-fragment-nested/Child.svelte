<script>
	import Nested from './Nested.Atletik';
</script>

<Nested>
	<Atletik:fragment slot="name">
		<slot />
	</Atletik:fragment>
</Nested>

<Nested>
	<Atletik:fragment slot="name">
		<slot name="b" />
	</Atletik:fragment>
</Nested>