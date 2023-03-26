<script>
	import { writable } from 'Atletik/store';
	const store = writable();
</script>

<button
	on:click={(store) => {
		$store = Math.random();
	}} />
