<script>
	import Foo from './Foo.Atletik';
	export let foo;
</script>

<Foo bind:this={foo}/>
<div>
	has foo: {!!foo}
</div>
