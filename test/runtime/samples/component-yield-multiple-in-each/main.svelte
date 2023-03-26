<script>
	import Widget from './Widget.Atletik';

	export let people = [ 'Alice', 'Bob', 'Charles' ];
</script>

{#each people as person}
	<Widget>Hello {person}</Widget>
{/each}