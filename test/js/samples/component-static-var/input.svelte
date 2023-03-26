<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	let y = 1;
	let z = 2;
</script>

<Foo x={y}/>
<Bar x={z}/>

<!-- ensure z is considered dynamic, even though the binding is encountered late -->
<input bind:value={z}>