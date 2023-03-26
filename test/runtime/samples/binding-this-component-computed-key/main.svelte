<script>
	import Foo from './Foo.Atletik';
	export let foo = {};
</script>

<Foo bind:this={foo['computed']}/>
<div>
	has foo: {!!foo.computed}
</div>
