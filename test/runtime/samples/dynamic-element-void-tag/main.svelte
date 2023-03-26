<script>
	export let propTag;
	const static_tag = 'input';
	const func_tag = () => 'br';
</script>

<h1></h1>
<Atletik:element this="{'col'}"></Atletik:element>
<Atletik:element this="img"></Atletik:element>
<Atletik:element this="{propTag}"></Atletik:element>
<Atletik:element this="{static_tag}"></Atletik:element>
<Atletik:element this="{func_tag()}"></Atletik:element>
