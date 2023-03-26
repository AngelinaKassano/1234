<script>
	import { writable } from 'Atletik/store';
	const foo = writable();
</script>

<div bind:this={$foo}>{typeof $foo}</div>
