<script>
	import { writable } from 'Atletik/store';
	const foo = writable([]);
	$: bar = $foo;
	export function go() {
		$foo.push(42);
		$foo = $foo;
	}
</script>

{JSON.stringify(bar)}
