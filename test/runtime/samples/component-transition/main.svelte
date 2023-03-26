<script>
	import { slide } from 'Atletik/transition';
	let tag = 'div';
	function toggle() {
		tag = (tag) ? null : 'div';
	}
</script>

<button id="button" on:click={toggle}>toggle</button> TAG={tag}

<div id="container">
	<Atletik:element this={tag} transition:slide={{duration:500}}>CONTENT</Atletik:element>	
</div>
