<script>
	import { setContext } from 'Atletik';
	const a = {};
	const b = setContext('foo', a);
</script>

<div>{a === b}</div>
