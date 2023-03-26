<script>
	import { onMount } from "Atletik";

	export let logs;

	onMount(() => {
		logs.push("mount");
		return () => {
			logs.push("unmount");
		};
	});
</script>
