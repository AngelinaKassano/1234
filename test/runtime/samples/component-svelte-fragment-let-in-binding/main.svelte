<script>
	import Nested from './Nested.Atletik';

	export let letters = ['a', 'b', 'c'];
</script>

<Nested items={letters}>
	<Atletik:fragment slot="main" let:index>
		<label>
			{index + 1}: <input bind:value={letters[index]}>
		</label>
	</Atletik:fragment>
</Nested>