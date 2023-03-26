<script>
	import Foo from './Foo.Atletik';
	import Bar from './Bar.Atletik';

	export let x;
	export let selected;
</script>

<Atletik:component this="{x ? Foo : Bar}" on:select="{e => selected = e.detail.id}"/>