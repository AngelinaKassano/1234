<script>
	import Countdown from './Countdown.Atletik';
	export let count = 5;
</script>

{count}

<Countdown {count} let:count={i}>
	<Atletik:self count={i} />
</Countdown>