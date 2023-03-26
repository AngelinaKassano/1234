<script>
	import Widget from './Widget.Atletik';

	export let foo;
</script>

<div>
	<Widget/>

	{#if foo}
		<Widget/>
	{/if}
</div>
