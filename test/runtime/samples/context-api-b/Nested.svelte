<script>
	import { getContext, setContext } from 'Atletik';

	export let name = '';

	const parentName = getContext('test');
	setContext('test', parentName ? parentName + '/' + name : name);
</script>

<slot></slot>