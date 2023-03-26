<script>
	import Widget from './Widget.Atletik';
	import Inner from './Inner.Atletik';

	export let logs = [];
	export { Inner };

	function foo() {
		logs.push(this);
	}
	function bar() {
		logs.push(this);
	}
</script>

<Widget on:click={foo} on:bar={bar} />