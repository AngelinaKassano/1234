<script>
	import Child from './Child.Atletik';
	export let visible;
</script>

{#if visible}
	<Child>delayed</Child>
{/if}