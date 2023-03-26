<script>
	import Outer from './Outer.Atletik'
	import Inner from './Inner.Atletik'

	export let prop
</script>

<Outer {prop}>
	<Atletik:fragment slot="main" let:value>
		<Inner>
			<Atletik:fragment slot="main">
				{value}
			</Atletik:fragment>
		</Inner>
	</Atletik:fragment>
</Outer>
