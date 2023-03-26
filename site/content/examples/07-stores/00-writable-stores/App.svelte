<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.Atletik';
	import Decrementer from './Decrementer.Atletik';
	import Resetter from './Resetter.Atletik';

	let countValue;

	const unsubscribe = count.subscribe(value => {
		countValue = value;
	});
</script>

<h1>The count is {countValue}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>