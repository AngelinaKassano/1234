<script>
	import Nested from "./Nested.Atletik";

	export let dynamic = 0;
</script>


<Nested>
	<span slot="a">static</span>
	<span slot="b">{dynamic}</span>
</Nested>
