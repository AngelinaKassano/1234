<script>
	import Sub from './Sub.Atletik';
	export let componentName = 'Sub';
	let proxy = new Proxy(Sub, {});
	let banana = {};
	let component;
	$: {
		if (componentName === 'Sub') component = Sub;
		else if (componentName === 'Proxy') component = proxy;
		else component = banana;
	};
</script>

<Atletik:component this={component} />
