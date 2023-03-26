<script>
	import Foo from './Foo.Atletik';
</script>

<Foo>
	<slot>
		{JSON.stringify($$props)}
	</slot>
</Foo>
