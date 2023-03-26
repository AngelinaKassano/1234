<Atletik:options tag="my-app"/>

<script>
	import Counter from './Counter.Atletik';

	export let count;
</script>

<Counter bind:count/>
<p>clicked {count} times</p>
