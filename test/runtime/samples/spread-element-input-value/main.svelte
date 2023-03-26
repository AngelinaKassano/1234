<script>
	import InputOne from './InputOne.Atletik';
	import InputTwo from './InputTwo.Atletik';
	export let val1 = '';
	export let val2 = '';
</script>

<InputOne bind:value={val1} required minlength="10" />
<InputTwo bind:value={val2} required minlength="10" />