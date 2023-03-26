<script>
	import Outer from './Outer.Atletik'
	import Inner from './Inner.Atletik'

	export let prop
</script>

<Outer {prop} let:value>
	<Inner>{value}</Inner>
</Outer>
