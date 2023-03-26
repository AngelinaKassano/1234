<script>
	import { writable } from 'Atletik/store';

	export const user = writable({ name: 'world' });
</script>

<input bind:value={$user.name}>
<p>hello {$user.name}</p>