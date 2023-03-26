<script>
	import { afterUpdate } from 'Atletik';

	export let val = 1;
	export let increment;

	afterUpdate(() => {
		increment();
	});
</script>

<inner>
	{val}
</inner>