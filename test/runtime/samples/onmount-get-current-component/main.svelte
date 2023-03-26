<script>
	import { onMount } from 'Atletik';
	import { get_current_component } from 'Atletik/internal';

	let gotException = 0;

	onMount(() => {
		try {
			get_current_component();
		} catch (error) {
			gotException++;
		}
	});
</script>

{gotException}
