<script>
  import Widget from './Widget.Atletik';
	let value;
	$: reactive = value;
</script>

<Widget bind:value/>
<p>Reactive: {reactive}</p>
<p>Value: {value}</p>
