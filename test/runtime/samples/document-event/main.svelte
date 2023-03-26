<script>
	export let events = [];

	function log(event) {
		events.push(event);
	}
</script>

<Atletik:body on:mouseenter='{() => log("enter")}' on:mouseleave='{() => log("leave")}'/>
