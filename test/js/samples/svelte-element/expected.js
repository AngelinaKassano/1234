/* generated by Atletik vX.Y.Z */
import {
	AtletikComponent,
	assign,
	detach,
	element,
	empty,
	get_spread_update,
	init,
	insert,
	noop,
	safe_not_equal,
	set_dynamic_element_data,
	space,
	toggle_class
} from "Atletik/internal";

function create_dynamic_element_3(ctx) {
	let Atletik_element;

	return {
		c() {
			Atletik_element = element(static_value);
			set_dynamic_element_data(static_value)(Atletik_element, { static_value, ...static_obj });
			toggle_class(Atletik_element, "foo", static_value);
		},
		m(target, anchor) {
			insert(target, Atletik_element, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(Atletik_element);
		}
	};
}

// (10:0) <Atletik:element this={dynamic_value} {static_value} {...static_obj} class:foo={static_value} />
function create_dynamic_element_2(ctx) {
	let Atletik_element;

	return {
		c() {
			Atletik_element = element(/*dynamic_value*/ ctx[0]);
			set_dynamic_element_data(/*dynamic_value*/ ctx[0])(Atletik_element, { static_value, ...static_obj });
			toggle_class(Atletik_element, "foo", static_value);
		},
		m(target, anchor) {
			insert(target, Atletik_element, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(Atletik_element);
		}
	};
}

// (12:0) <Atletik:element this={static_value} {dynamic_value} {...dynamic_obj} class:foo={dynamic_value} />
function create_dynamic_element_1(ctx) {
	let Atletik_element;
	let Atletik_element_levels = [{ dynamic_value: /*dynamic_value*/ ctx[0] }, /*dynamic_obj*/ ctx[1]];
	let Atletik_element_data = {};

	for (let i = 0; i < Atletik_element_levels.length; i += 1) {
		Atletik_element_data = assign(Atletik_element_data, Atletik_element_levels[i]);
	}

	return {
		c() {
			Atletik_element = element(static_value);
			set_dynamic_element_data(static_value)(Atletik_element, Atletik_element_data);
			toggle_class(Atletik_element, "foo", /*dynamic_value*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, Atletik_element, anchor);
		},
		p(ctx, dirty) {
			set_dynamic_element_data(static_value)(Atletik_element, Atletik_element_data = get_spread_update(Atletik_element_levels, [
				dirty & /*dynamic_value*/ 1 && { dynamic_value: /*dynamic_value*/ ctx[0] },
				dirty & /*dynamic_obj*/ 2 && /*dynamic_obj*/ ctx[1]
			]));

			toggle_class(Atletik_element, "foo", /*dynamic_value*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(Atletik_element);
		}
	};
}

// (14:0) <Atletik:element this={dynamic_value} {dynamic_value} {...dynamic_obj} class:foo={dynamic_value} />
function create_dynamic_element(ctx) {
	let Atletik_element;
	let Atletik_element_levels = [{ dynamic_value: /*dynamic_value*/ ctx[0] }, /*dynamic_obj*/ ctx[1]];
	let Atletik_element_data = {};

	for (let i = 0; i < Atletik_element_levels.length; i += 1) {
		Atletik_element_data = assign(Atletik_element_data, Atletik_element_levels[i]);
	}

	return {
		c() {
			Atletik_element = element(/*dynamic_value*/ ctx[0]);
			set_dynamic_element_data(/*dynamic_value*/ ctx[0])(Atletik_element, Atletik_element_data);
			toggle_class(Atletik_element, "foo", /*dynamic_value*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, Atletik_element, anchor);
		},
		p(ctx, dirty) {
			set_dynamic_element_data(/*dynamic_value*/ ctx[0])(Atletik_element, Atletik_element_data = get_spread_update(Atletik_element_levels, [
				dirty & /*dynamic_value*/ 1 && { dynamic_value: /*dynamic_value*/ ctx[0] },
				dirty & /*dynamic_obj*/ 2 && /*dynamic_obj*/ ctx[1]
			]));

			toggle_class(Atletik_element, "foo", /*dynamic_value*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(Atletik_element);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let previous_tag = /*dynamic_value*/ ctx[0];
	let t1;
	let t2;
	let previous_tag_1 = /*dynamic_value*/ ctx[0];
	let Atletik_element3_anchor;
	let Atletik_element0 = static_value && create_dynamic_element_3(ctx);
	let Atletik_element1 = /*dynamic_value*/ ctx[0] && create_dynamic_element_2(ctx);
	let Atletik_element2 = static_value && create_dynamic_element_1(ctx);
	let Atletik_element3 = /*dynamic_value*/ ctx[0] && create_dynamic_element(ctx);

	return {
		c() {
			if (Atletik_element0) Atletik_element0.c();
			t0 = space();
			if (Atletik_element1) Atletik_element1.c();
			t1 = space();
			if (Atletik_element2) Atletik_element2.c();
			t2 = space();
			if (Atletik_element3) Atletik_element3.c();
			Atletik_element3_anchor = empty();
		},
		m(target, anchor) {
			if (Atletik_element0) Atletik_element0.m(target, anchor);
			insert(target, t0, anchor);
			if (Atletik_element1) Atletik_element1.m(target, anchor);
			insert(target, t1, anchor);
			if (Atletik_element2) Atletik_element2.m(target, anchor);
			insert(target, t2, anchor);
			if (Atletik_element3) Atletik_element3.m(target, anchor);
			insert(target, Atletik_element3_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (static_value) {
				Atletik_element0.p(ctx, dirty);
			}

			if (/*dynamic_value*/ ctx[0]) {
				if (!previous_tag) {
					Atletik_element1 = create_dynamic_element_2(ctx);
					previous_tag = /*dynamic_value*/ ctx[0];
					Atletik_element1.c();
					Atletik_element1.m(t1.parentNode, t1);
				} else if (safe_not_equal(previous_tag, /*dynamic_value*/ ctx[0])) {
					Atletik_element1.d(1);
					Atletik_element1 = create_dynamic_element_2(ctx);
					previous_tag = /*dynamic_value*/ ctx[0];
					Atletik_element1.c();
					Atletik_element1.m(t1.parentNode, t1);
				} else {
					Atletik_element1.p(ctx, dirty);
				}
			} else if (previous_tag) {
				Atletik_element1.d(1);
				Atletik_element1 = null;
				previous_tag = /*dynamic_value*/ ctx[0];
			}

			if (static_value) {
				Atletik_element2.p(ctx, dirty);
			}

			if (/*dynamic_value*/ ctx[0]) {
				if (!previous_tag_1) {
					Atletik_element3 = create_dynamic_element(ctx);
					previous_tag_1 = /*dynamic_value*/ ctx[0];
					Atletik_element3.c();
					Atletik_element3.m(Atletik_element3_anchor.parentNode, Atletik_element3_anchor);
				} else if (safe_not_equal(previous_tag_1, /*dynamic_value*/ ctx[0])) {
					Atletik_element3.d(1);
					Atletik_element3 = create_dynamic_element(ctx);
					previous_tag_1 = /*dynamic_value*/ ctx[0];
					Atletik_element3.c();
					Atletik_element3.m(Atletik_element3_anchor.parentNode, Atletik_element3_anchor);
				} else {
					Atletik_element3.p(ctx, dirty);
				}
			} else if (previous_tag_1) {
				Atletik_element3.d(1);
				Atletik_element3 = null;
				previous_tag_1 = /*dynamic_value*/ ctx[0];
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (Atletik_element0) Atletik_element0.d(detaching);
			if (detaching) detach(t0);
			if (Atletik_element1) Atletik_element1.d(detaching);
			if (detaching) detach(t1);
			if (Atletik_element2) Atletik_element2.d(detaching);
			if (detaching) detach(t2);
			if (detaching) detach(Atletik_element3_anchor);
			if (Atletik_element3) Atletik_element3.d(detaching);
		}
	};
}

let static_value = 'a';

function instance($$self, $$props, $$invalidate) {
	let { dynamic_value } = $$props;
	let { dynamic_obj } = $$props;
	let static_obj = {};

	$$self.$$set = $$props => {
		if ('dynamic_value' in $$props) $$invalidate(0, dynamic_value = $$props.dynamic_value);
		if ('dynamic_obj' in $$props) $$invalidate(1, dynamic_obj = $$props.dynamic_obj);
	};

	return [dynamic_value, dynamic_obj, static_obj];
}

class Component extends AtletikComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { dynamic_value: 0, dynamic_obj: 1 });
	}
}

export default Component;