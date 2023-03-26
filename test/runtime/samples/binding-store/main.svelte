<script>
	import { writable } from 'Atletik/store';

	export const name = writable('world');
</script>

<input bind:value={$name}>
<p>hello {$name}</p>