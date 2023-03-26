<script>
  import Inner from './Inner.Atletik'
  export let log;
  export let a;
	export let b;
</script>

<Inner {log} {b}>
  <Atletik:fragment let:innerCall slot="inner_slot">
    <slot outerCall={() => innerCall(a)} />
  </Atletik:fragment>
</Inner>