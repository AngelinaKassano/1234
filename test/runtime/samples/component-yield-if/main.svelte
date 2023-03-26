<script>
	import Widget from './Widget.Atletik';

	export let widget;
	export let data = "Hello";
</script>

<div>
	<Widget bind:this={widget}>{data}</Widget>
</div>