<script context='module'>
	let foo;
</script>

<script>
	import { onMount } from 'Atletik';
	let bar;
	onMount(() => bar = foo);
</script>

<div bind:this={foo}>{typeof bar}</div>
