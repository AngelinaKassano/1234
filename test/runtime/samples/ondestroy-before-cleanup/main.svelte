<script>
	import Top from './Top.Atletik';

	export let top;
	export let visible = true;
</script>

{#if visible}
	<Top bind:this={top}></Top>
{/if}