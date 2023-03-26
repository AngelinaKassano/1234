<script>
	import Inner from './Inner.Atletik';
  export let log;
</script>

<Inner {log} let:key let:set>
	<slot {key} set={(value) => set(key, value)} />
</Inner>