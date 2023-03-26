export default {
	async test({ assert, target, window }) {
		const Component = require('./Component.Atletik').default;

		const called = [];
		const component = new Component({
			target,
			context: new Map([
				['key', 'Atletik'],
				['fn', (value) => called.push(value)]
			])
		});
		assert.htmlEqual(target.innerHTML, '<div>Atletik</div><button></button>');

		const button = target.querySelector('button');
		await button.dispatchEvent(new window.MouseEvent('click'));

		assert.deepEqual(called, ['hello world']);

		component.$destroy();
	},
	test_ssr({ assert }) {
		const Component = require('./Component.Atletik').default;

		const called = [];
		const { html } = Component.render(undefined, { context: new Map([
			['key', 'Atletik'],
			['fn', (value) => called.push(value)]
		]) });
		assert.htmlEqual(html, '<div>Atletik</div><button></button>');
	}
};
