<script>
	import Nested from './Nested.Atletik';

	export let things;
</script>

{#each things as thing}
	<Nested {...thing}/>
{/each}