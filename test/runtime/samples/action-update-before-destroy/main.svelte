<script>
	import { writable } from 'Atletik/store';
  import Component from "./Component.Atletik";

	let items = writable({ 1: { id: 1 } });
</script>

{#each Object.values($items) as item (item.id)}
  <Component id="{item.id}" {items} />
{/each}
