<script>
	import { beforeUpdate } from 'Atletik';

	import Widget from './Widget.Atletik';

	export let foo = { x: 1 };
	export let bar = { x: 1 };

	beforeUpdate(() => {
		bar = foo;
	});
</script>

<Widget foo='{foo}' bar='{bar}'/>
