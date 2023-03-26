<script>
	import { model } from "./store.Atletik";
	export let value = '';
</script>

<input bind:value={$model} />
{value}