<script>
  import { createEventDispatcher } from 'Atletik';
  const dispatch = createEventDispatcher();

</script>

<button on:click={() => dispatch('bar')} />