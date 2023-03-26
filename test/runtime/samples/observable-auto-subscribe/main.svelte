<script>
	import Nested from './Nested.Atletik';

	export let observable;
	export let visible;
</script>

{#if visible}
	<Nested {observable}/>
{/if}