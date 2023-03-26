<script>
	import { writable } from 'Atletik/store';
	let foo = writable(0);
</script>

<h1>{$foo}</h1>
<button on:click="{() => foo = writable(0)}">reset</button>