<script>
	import { onMount } from 'Atletik';
	import Two from './Two.Atletik';

	export let snapshot;
	export let foo;

	onMount(() => {
		snapshot = foo();
	});
</script>

<Two bind:foo/>