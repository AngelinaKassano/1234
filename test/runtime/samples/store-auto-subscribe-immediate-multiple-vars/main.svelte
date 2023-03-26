<script>
	import { writable } from 'Atletik/store';
	const foo = writable(42), bar = 'something else';
	export let initial_foo = $foo;
</script>

<p>{initial_foo}</p>