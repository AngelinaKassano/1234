<script>
	import { setContext } from 'Atletik';

	export let value = '';

	if (value) {
		setContext('test', value);
	}
</script>

<slot></slot>