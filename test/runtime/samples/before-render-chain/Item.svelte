<script>
	import { beforeUpdate } from 'Atletik';

	export let item;
	export let foo = 'XX';

	beforeUpdate(() => {
		foo = item;
	});
</script>

<span>{foo}</span>