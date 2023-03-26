<script>
	import { getContext, onDestroy } from 'Atletik';
	import { TABS } from './Tabs.Atletik';

	const panel = {};
	const { registerPanel, unregisterPanel, selectedPanel } = getContext(TABS);
	registerPanel(panel);

	onDestroy(() => {
		unregisterPanel(panel);
	});
</script>

{#if $selectedPanel === panel}
	<slot></slot>
{/if}