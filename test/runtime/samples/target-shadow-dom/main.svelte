<script>
	import App from './App.Atletik';
	import { onMount } from 'Atletik';

	export let div;
	onMount(() => {
		const root = div.attachShadow({ mode: 'open' });

		const app = new App({
			target: root
		});

		return () => {
			app.$destroy();
		}
	});
</script>

<div bind:this={div} />