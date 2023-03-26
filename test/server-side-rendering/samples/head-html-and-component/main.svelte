<script>
	import HeadNested from './HeadNested.Atletik';
	import Nested from './Nested.Atletik';
</script>

<Atletik:head>
	{@html '<meta name="main_html" content="main_html">'}
	<meta name="main" content="main">
	<HeadNested />
</Atletik:head>

<Nested/>
