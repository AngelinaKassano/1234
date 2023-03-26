<script>
	export let width;
	export let height;
</script>

<Atletik:window bind:innerWidth={width} bind:innerHeight={height}/>

<div>{width}x{height}</div>