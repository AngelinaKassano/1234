<script>
	import Mount from './Mount.Atletik';
	import { onMount } from 'Atletik';

	onMount(() => {
		const component = new Mount({
			target: document.querySelector('#target'),
			props: {},
		});
	});
</script>

<div id="target" />
