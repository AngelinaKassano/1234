<script>
	import App from './App.Atletik';
	import { onMount } from 'Atletik';

	export let div;

	onMount(() => {
		const app = new App({
			target: div
		});

		return () => {
			app.$destroy();
		}
	});
</script>

<div bind:this={div} />