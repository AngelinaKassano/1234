<script>
	const tags = [{ t: 'div', content: 'hello world' }, { t: 'input' }];
</script>

{#each tags as tag}
	{tag.t} <br />
	<Atletik:element this={tag.t}>
		{#if tag.t !== 'input'}{tag.content}{/if}
	</Atletik:element>
{/each}
