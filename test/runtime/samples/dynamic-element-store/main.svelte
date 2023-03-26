<script>
  import { writable } from 'Atletik/store';
  const foo = writable('div');
</script>

<Atletik:element this={$foo}></Atletik:element>