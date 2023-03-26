<script>
	import App from './App.Atletik';
	import { onMount } from 'Atletik';

	export let div;

	onMount(() => {
		div = document.createElement('div');

		const app = new App({
			target: div
		});

		return () => {
			app.$destroy();
		}
	});
</script>
