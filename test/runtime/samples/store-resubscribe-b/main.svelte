<script>
	import { writable } from 'Atletik/store';
	let foo = writable(0);
	foo = writable(42);
</script>

{$foo}
