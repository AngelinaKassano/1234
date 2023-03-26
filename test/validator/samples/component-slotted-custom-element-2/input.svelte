<script>
	import Nested from './Nested.Atletik';
	let thing = false;
</script>

<custom-element>
	<Nested>
		{#if thing}
			<div>
				<div slot='bar' />
			</div>
		{/if}
	</Nested>
</custom-element>