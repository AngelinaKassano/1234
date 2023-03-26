<script>
	import IconA from './IconA.Atletik';
	import IconB from './IconB.Atletik';

	let variable = false;
</script>

<button on:click={() => variable = !variable}>Click Me</button>
<div>
	<slot>
		<Atletik:component this={variable ? IconA : IconB} />
	</slot>
</div>
