<script>
	import Input from "./Input.Atletik";
	import Display from "./Display.Atletik";
</script>

<Input let:val={foo}>
	{#if foo}
		<Display>{foo}</Display>
	{/if}
</Input>
