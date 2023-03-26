<script>
	let selection = '';

	const handleSelectionChange = (e) => selection = document.getSelection();
</script>

<Atletik:document on:selectionchange={handleSelectionChange} />

<p>Select this text to fire events</p>
<p>Selection: {selection}</p>
