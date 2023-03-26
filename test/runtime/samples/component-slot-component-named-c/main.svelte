<script>
	import Nested from './Nested.Atletik';
	import Hello from './Hello.Atletik';
	import World from './World.Atletik';
</script>

<Nested>
	<Hello slot="name" />
</Nested>

<Nested>
	<World slot="name" />
</Nested>