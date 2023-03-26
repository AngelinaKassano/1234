<script>
	import { createEventDispatcher } from 'Atletik';
	import Widget from './Widget.Atletik';

	const dispatch = createEventDispatcher();

	export let visible;
</script>

<div>
	{#if visible}
		<Widget on:destroy='{() => dispatch("widgetTornDown")}'/>
	{/if}
</div>