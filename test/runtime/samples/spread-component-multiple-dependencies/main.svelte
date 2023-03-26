<script>
	export let foo = false;
	export let a = 'a';
	export let b = 'b';
	export let bar = { baz: 'baz' };

	import Widget from './Widget.Atletik';
</script>

<Widget foo={foo ? a : b} {...bar}/>
