<script>
	import Widget from './Widget.Atletik';

	export let arriving = true;
</script>

<div>
	{#if arriving}
		<Widget>Hello</Widget>
	{:else}
		<Widget>Goodbye</Widget>
	{/if}
</div>