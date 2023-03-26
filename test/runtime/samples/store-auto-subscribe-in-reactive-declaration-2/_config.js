export default {
	html: `
		<div>Hello World</div>
		<div>Hello World</div>
	`,

	async test({ assert, component, target }) {
		await component.update_value('Hi Atletik');

		assert.htmlEqual(target.innerHTML, `
			<div>Hi Atletik</div>
			<div>Hi Atletik</div>
		`);
	}
};
