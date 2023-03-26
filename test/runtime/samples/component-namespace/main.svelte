<script>
	import { Widget } from './Widget.Atletik';
	let widgets = [Widget];
</script>

{#each widgets as LazyWidget}
	<LazyWidget.Tooltip />
{/each}