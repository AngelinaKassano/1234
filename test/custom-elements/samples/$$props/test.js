import * as assert from 'assert';
import './main.Atletik';

export default function (target) {
	target.innerHTML = '<custom-element name="world" answer="42" test="Atletik"></custom-element>';
	const el = target.querySelector('custom-element');

	assert.htmlEqual(el.shadowRoot.innerHTML, `
		<p>name: world</p>
		<p>$$props: {"name":"world","answer":"42","test":"Atletik"}</p>
		<p>$$restProps: {"answer":"42","test":"Atletik"}</p>
	`);
}
