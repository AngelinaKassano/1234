<Atletik:options tag="custom-element"/>

<script>
	import './my-widget.Atletik';

	export let items = ['a', 'b', 'c'];
	export let flagged = false;
</script>

<my-widget class="foo" {items} flag1={flagged} flag2 />
