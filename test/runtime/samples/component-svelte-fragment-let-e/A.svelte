<script>
	import B from './B.Atletik';
	export let x;
</script>

<B {x} let:reflected>
	<Atletik:fragment slot="main">
		<span>{reflected}</span>
		<slot name="main" {reflected} />
	</Atletik:fragment>
</B>