<script>
	import A from './A.Atletik';
	import B from './B.Atletik';

	export let x;
</script>

<Atletik:component this="{x ? A : B}"/>