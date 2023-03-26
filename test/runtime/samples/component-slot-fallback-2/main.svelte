<script>
	import Outer from "./Outer.Atletik";
	import Inner from "./Inner.Atletik";
	import {model} from "./store.Atletik";

	export let props = '';
	export let fallback = '';

	export function getSubscriberCount() {
		return model.getCount();
	}
</script>

<Outer slotProps={props} defaultValue={fallback} let:slotProps>    
	<Inner value={slotProps} />
</Outer>

<Outer slotProps={props} defaultValue={fallback} let:slotProps>    
	<Inner value={slotProps} />
</Outer>

<Outer slotProps={props} defaultValue={fallback}>
</Outer>
