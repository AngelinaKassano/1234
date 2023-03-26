/* generated by Atletik vX.Y.Z */
import { AtletikComponent, init, noop, safe_not_equal } from "Atletik/internal";

function create_fragment(ctx) {
	let title_value;
	document.title = title_value = "a " + /*custom*/ ctx[0] + " title";

	return {
		c: noop,
		m: noop,
		p(ctx, [dirty]) {
			if (dirty & /*custom*/ 1 && title_value !== (title_value = "a " + /*custom*/ ctx[0] + " title")) {
				document.title = title_value;
			}
		},
		i: noop,
		o: noop,
		d: noop
	};
}

function instance($$self, $$props, $$invalidate) {
	let { custom } = $$props;

	$$self.$$set = $$props => {
		if ('custom' in $$props) $$invalidate(0, custom = $$props.custom);
	};

	return [custom];
}

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { custom: 0 });
	}
}

export default Component;