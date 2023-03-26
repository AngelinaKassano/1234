export default {
	skip_if_ssr: true,
	compileOptions: {
		cssHash: () => 'Atletik-xyz'
	},
	async test({ assert, component, window }) {
		assert.htmlEqual(window.document.head.innerHTML, '');
		assert.htmlEqual(component.div.shadowRoot.innerHTML, `
			<style id="Atletik-xyz">div.Atletik-xyz{color:red}</style>
			<div class="Atletik-xyz">Hello World</div>
		`);
	}
};
