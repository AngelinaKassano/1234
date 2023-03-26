<script>
	import Nested from './Nested.Atletik';
	import Hello from './Hello.Atletik';

	let name = 'world';
</script>

<Nested>
	<Hello slot="name" {name} />
</Nested>