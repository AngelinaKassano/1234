<script>
	import Component from './Component.Atletik';
	export let thePromise;
	export let count;
	export { Component }
</script>

<div>
	{#await thePromise}
		<p>loading...</p>
	{:then { value: theValue, Component }}
		Resolved: <Atletik:component this={Component} {count} value={theValue} />
	{:catch { value: theError, Component } }
		Rejected: <Atletik:component this={Component} {count} value={theError} />
	{/await}
</div>