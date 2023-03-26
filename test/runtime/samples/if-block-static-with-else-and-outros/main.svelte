<script>
	import EEE from './EEE.Atletik';
	import RRR from './RRR.Atletik';
</script>

{#if "Eva".startsWith('E')}
	<EEE/>
{:else}
	<RRR/>
{/if}