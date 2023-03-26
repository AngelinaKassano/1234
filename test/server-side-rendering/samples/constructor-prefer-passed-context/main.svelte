<script>
	import { setContext } from 'Atletik';
	import ChildComponent from './ChildComponent.Atletik';

	setContext('foo', true);

	const content = ChildComponent.render({}, { context: new Map() }).html;
</script>

<div>{@html content}</div>
