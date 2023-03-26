<script>
	import Inner from "./Inner.Atletik";
	export let defaultValue = '';
	export let slotProps = '';
</script>

<slot {slotProps}><Inner value={defaultValue} /></slot>