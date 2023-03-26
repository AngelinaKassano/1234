<script>
	import Nested from './Nested.Atletik';
	let thing = false;
</script>

<Nested>
	<custom-element>
		<div>
			<div slot='foo' />
		</div>
		{#if thing}
			<div slot='bar' />
		{/if}
	</custom-element>
</Nested>