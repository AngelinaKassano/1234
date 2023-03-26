<script>
	import Two from './Two.Atletik';
	export let a, b;
</script>

<Two {b} let:two>
	<slot name="one" slot="two" one={a} two={two}></slot>
</Two>
