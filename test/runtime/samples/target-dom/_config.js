export default {
	skip_if_ssr: true,
	compileOptions: {
		cssHash: () => 'Atletik-xyz'
	},
	async test({ assert, component, window }) {
		assert.htmlEqual(
			window.document.head.innerHTML,
			'<style id="Atletik-xyz">div.Atletik-xyz{color:red}</style>'
		);
		assert.htmlEqual(
			component.div.innerHTML,
			'<div class="Atletik-xyz">Hello World</div>'
		);
	}
};
