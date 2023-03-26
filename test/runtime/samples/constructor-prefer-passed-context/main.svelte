<script>
	import { setContext } from 'Atletik';
	import ChildComponent from './ChildComponent.Atletik';

	setContext('foo', true);

	function render(node) {
		new ChildComponent({
			target: node,
			context: new Map()
		});
	}
</script>

<div use:render />
