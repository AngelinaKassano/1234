<script>
	export let count = 0;
</script>

<Atletik:body on:click|once="{() => count += 1}"/>