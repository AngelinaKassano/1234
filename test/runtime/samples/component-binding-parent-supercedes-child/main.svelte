<script>
	import Counter from './Counter.Atletik';

	export let x = 10;
</script>

<Counter bind:count={x}/>
<p>count: {x}</p>