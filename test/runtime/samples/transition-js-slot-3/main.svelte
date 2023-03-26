<script>
	import Nested from './Nested.Atletik';

	let nested;

	export function show() {
		nested.show();
	}
	export function hide() {
		nested.hide();
	}
</script>

<Nested bind:this={nested} let:data>
	{data}
</Nested>
