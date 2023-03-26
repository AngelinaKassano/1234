<script>
	import { beforeUpdate } from 'Atletik';
	import Nested from './Nested.Atletik';

	export let snapshots;
	export let visibleThings = [];

	beforeUpdate(() => {
		if (!snapshots) {
			// first run
			snapshots = [];
		}

		snapshots.push(visibleThings);
	});
</script>

<Nested bind:visibleThings={visibleThings} />