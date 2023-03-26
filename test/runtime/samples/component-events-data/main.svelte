<script>
	import { createEventDispatcher } from 'Atletik';
	import Widget from './Widget.Atletik';

	const dispatch = createEventDispatcher();
</script>

<div>
	<Widget on:select='{event => dispatch("select", event.detail.selection)}'/>
</div>