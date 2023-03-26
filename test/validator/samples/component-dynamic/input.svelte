<script>
	import A from './A.Atletik';
	import B from './B.Atletik';

	let Let = A;
	function update() {
		Let = B;
	}

	export let ExportLet = B;

	$: Reactive = random() ? A : B;
</script>

<Let />
<ExportLet />
<Reactive />
<Atletik:component this={Let} />

<!-- Here, we test to see if Atletik-ignore works with reactive-component -->
<!-- Atletik-ignore reactive-component -->
<Let />
<div>
  <!-- Atletik-ignore reactive-component -->
  <ExportLet />
  <div>
    <!-- Atletik-ignore reactive-component -->
    <Reactive />
  </div>
</div>
