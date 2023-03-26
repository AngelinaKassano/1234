<script>
	import A, { a, b, c, d } from './A.Atletik';
	import {onMount} from 'Atletik';

	let component;
	let props = {};
	onMount(() => {
		props = {
			d: component.d,
			e: component.e,
			f: component.f,
			g: component.g,
		};
	});
</script>

{a},{b},{c},{d}
<br />
<A bind:this={component} />
<br />
{JSON.stringify(props)}