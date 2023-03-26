const fs = require('fs');
const path = require('path');

export function test({ assert, js }) {
	assert.deepEqual(js.map.sources, ['input.Atletik']);
	assert.deepEqual(js.map.sourcesContent, [
		fs.readFileSync(path.join(__dirname, 'input.Atletik'), 'utf-8')
	]);
}
