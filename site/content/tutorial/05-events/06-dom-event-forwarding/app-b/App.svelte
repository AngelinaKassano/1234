<script>
	import CustomButton from './CustomButton.Atletik';

	function handleClick() {
		alert('Button Clicked');
	}
</script>

<CustomButton on:click={handleClick}/>