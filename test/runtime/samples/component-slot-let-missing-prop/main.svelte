<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	const things = { '1': 'one' };
</script>

<Foo let:id>
	<Bar thing={things[id]}/>
</Foo>