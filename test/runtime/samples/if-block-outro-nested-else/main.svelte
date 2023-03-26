<script>
	export let foo = true;

	import Component from './Component.Atletik';
</script>

{#if foo}
	{#if false}
		<Component/>
	{:else if false}
		<Component/>
	{/if}
{/if}
