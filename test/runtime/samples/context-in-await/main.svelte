<script>
	import { setContext } from 'Atletik';
	import Child from './Child.Atletik';

	setContext('test', 123);

	export let promise = Promise.resolve();
</script>

{#await promise}
	<p>...waiting</p>
{:then}
	<Child />
{/await}