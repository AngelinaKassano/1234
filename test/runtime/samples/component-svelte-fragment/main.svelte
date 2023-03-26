<script>
	import Nested from "./Nested.Atletik";
	import B from './B.Atletik';
	const a = 'a';
</script>
<Nested>
	<Atletik:fragment slot="a">
		content <span>{ a }</span>
	</Atletik:fragment>
	<Atletik:fragment slot="b">
		<B name="world" />
	</Atletik:fragment>
</Nested>
