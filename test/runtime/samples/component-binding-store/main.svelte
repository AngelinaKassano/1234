<script>
	import { writable } from 'Atletik/store';
	import Input from './Input.Atletik';

	let value = writable({ value: '' });

	export let callback = () => {};

	value.subscribe(() => {
		callback();
	})
</script>

<input bind:value={$value.value} />

<Input bind:value={$value.value}/>

<div>{$value.value}</div>