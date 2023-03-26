<script>
	import Sub from './Sub.Atletik';
	export let selected;
	let banana = {};
	let component = banana;
	$: selected ? component = Sub : component = banana;
</script>

<Atletik:component this={component} />
