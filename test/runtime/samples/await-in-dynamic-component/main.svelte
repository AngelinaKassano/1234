<script>
	export let flag = true;
	import Widget from './Widget.Atletik';
</script>

<Atletik:component this={flag && Widget}/>