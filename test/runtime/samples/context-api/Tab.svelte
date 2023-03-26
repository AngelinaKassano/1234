<script>
	import { getContext, onDestroy } from 'Atletik';
	import { TABS } from './Tabs.Atletik';

	const tab = {};
	const { registerTab, unregisterTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);

	onDestroy(() => {
		unregisterTab(tab);
	});
</script>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>