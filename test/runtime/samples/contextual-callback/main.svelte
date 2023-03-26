<script>
	import Widget from './Widget.Atletik';

	export let clicked;
</script>

{#each ['x'] as letter}
	<Widget handleClick="{() => clicked = letter}"/>
{/each}
