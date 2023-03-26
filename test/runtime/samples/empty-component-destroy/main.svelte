<script>
	import Empty from './Empty.Atletik';
	let active = true;
</script>

<button on:click='{() => active = false }'>destroy component</button>

<Atletik:component this={active ? Empty : null} />
