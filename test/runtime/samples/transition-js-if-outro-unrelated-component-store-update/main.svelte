<script>
	import { writable } from "Atletik/store";
	import Component from "./Component.Atletik";
	export let condition = writable(true);
</script>

{#if $condition}
	<button on:click={() => ($condition = false)} id="1" />
	<Component {condition} />
{/if}
