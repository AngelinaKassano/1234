<script>
	import A from './A.Atletik';
	export let x = 1;
	let y = 0;
</script>

<A {x}>
	<Atletik:fragment slot="foo" let:reflected>
		<span 
			on:click={() => y = reflected}
			class={reflected}
		>
			{reflected}
		</span>
	</Atletik:fragment>
</A>
{ y }