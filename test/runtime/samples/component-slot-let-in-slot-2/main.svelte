<script>
	import Outer from './Outer.Atletik'
	import Inner from './Inner.Atletik'

	export let prop
	export let log;
</script>

<Outer {prop} let:value>
	<Inner><button on:click={() => { log(value); }} /></Inner>
</Outer>
