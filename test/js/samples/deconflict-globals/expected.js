/* generated by Atletik vX.Y.Z */
import { AtletikComponent, init, safe_not_equal } from "Atletik/internal";

import { onMount } from 'Atletik';

function instance($$self, $$props, $$invalidate) {
	let { foo = 'bar' } = $$props;

	onMount(() => {
		alert(JSON.stringify(data()));
	});

	$$self.$$set = $$props => {
		if ('foo' in $$props) $$invalidate(0, foo = $$props.foo);
	};

	return [foo];
}

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, { foo: 0 });
	}
}

export default Component;