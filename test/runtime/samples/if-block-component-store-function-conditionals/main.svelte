<script>
	import {writable} from 'Atletik/store';
	import Widget from './Widget.Atletik';
	let a = (writable({}));
	let b = () => true;
</script>
<!-- if (reactive && non-reactive) -->
{#if $a || b() }
		<Widget></Widget>
{:else}
	<pre>fail</pre>
{/if}