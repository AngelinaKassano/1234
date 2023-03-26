<script>
	import CustomButton from './CustomButton.Atletik';

	function handleClick() {
		alert('clicked');
	}
</script>

<CustomButton on:click={handleClick}/>