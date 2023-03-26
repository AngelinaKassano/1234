<script>
	import Widget from './Widget.Atletik';

	export let props = {};
	export let x = 'foo';
</script>

<Atletik:component this={Widget} {...props} bind:value={x} />