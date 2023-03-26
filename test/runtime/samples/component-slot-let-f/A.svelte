<script>
	import B from './B.Atletik';
	export let x;
</script>

<B {x} let:reflected>
	<span>{reflected}</span>
	<slot {reflected} />
</B>