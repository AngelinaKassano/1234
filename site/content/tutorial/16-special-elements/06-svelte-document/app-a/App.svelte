<script>
	let selection = '';

	const handleSelectionChange = (e) => selection = document.getSelection();
</script>

<Atletik:document />

<p>Select this text to fire events</p>
<p>Selection: {selection}</p>
