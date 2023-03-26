<script>
	import A from './A.Atletik';
	export let x = 1;
</script>

<A {x}>
	<Atletik:fragment slot="main" let:reflected>
		<span>{reflected}</span>
	</Atletik:fragment>	
</A>

<A {x} let:reflected>
	<Atletik:fragment slot="main">
		<span>{reflected}</span>
	</Atletik:fragment>	
</A>