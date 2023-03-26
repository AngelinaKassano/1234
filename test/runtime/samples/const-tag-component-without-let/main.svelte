<script>
	import Component from './Component.Atletik';
	export let props = "dynamic";
</script>

<Component>
	<Atletik:fragment slot="box1">
		{@const foo = "static"}
		{@const bar = props}
		<div>{foo} {bar}</div>
	</Atletik:fragment>

	<Atletik:fragment>
		{@const foo = "static"}
		{@const bar = props}
		<div>{foo} {bar}</div>
	</Atletik:fragment>
</Component>

<Component>
	{@const foo = "static"}
	{@const bar = props}
	<div>{foo} {bar}</div>
</Component>
