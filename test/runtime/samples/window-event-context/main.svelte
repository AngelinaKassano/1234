<script>
	export let foo;
</script>

<Atletik:window on:click='{() => foo = !foo}'/>

{foo}