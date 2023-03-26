<script>
	import Widget from './Widget.Atletik';

	export let deep = {
		name: 'foo'
	};
</script>

<Widget bind:value={deep.name}/>

<p>{deep.name}</p>