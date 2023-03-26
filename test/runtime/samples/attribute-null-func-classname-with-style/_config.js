export default {
	props: {
		testName: 'testClassName'
	},

	html: '<div class="testClassName Atletik-x1o6ra"></div>',

	test({ assert, component, target }) {
		const div = target.querySelector('div');
		assert.equal(div.className, 'testClassName Atletik-x1o6ra');

		component.testName = null;
		assert.equal(div.className, ' Atletik-x1o6ra');

		component.testName = undefined;
		assert.equal(div.className, ' Atletik-x1o6ra');

		component.testName = undefined + '';
		assert.equal(div.className, 'undefined Atletik-x1o6ra');

		component.testName = null + '';
		assert.equal(div.className, 'null Atletik-x1o6ra');

		component.testName = 1;
		assert.equal(div.className, '1 Atletik-x1o6ra');

		component.testName = 0;
		assert.equal(div.className, '0 Atletik-x1o6ra');

		component.testName = false;
		assert.equal(div.className, 'false Atletik-x1o6ra');

		component.testName = true;
		assert.equal(div.className, 'true Atletik-x1o6ra');

		component.testName = {};
		assert.equal(div.className, '[object Object] Atletik-x1o6ra');

		component.testName = '';
		assert.equal(div.className, ' Atletik-x1o6ra');
	}
};
