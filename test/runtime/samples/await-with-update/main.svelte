<script>
	import Component from './Component.Atletik';
	export let thePromise;
	export let count;
	export { Component }
</script>

<div>
	{#await thePromise}
		<p>loading...</p>
	{:then theValue}
		Resolved: <Atletik:component this={theValue} {count} />
	{:catch theError}
		Rejected: <Atletik:component this={theError} {count} />
	{/await}
</div>