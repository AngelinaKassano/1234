/* generated by Atletik vX.Y.Z */
import {
	AtletikComponentDev,
	add_location,
	append_dev,
	destroy_each,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	noop,
	safe_not_equal,
	set_data_dev,
	space,
	text,
	validate_each_argument,
	validate_slots
} from "Atletik/internal";

const file = undefined;

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (8:0) {#each things as thing}
function create_each_block(ctx) {
	let span;
	let t0_value = /*thing*/ ctx[4].name + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			span = element("span");
			t0 = text(t0_value);
			t1 = space();

			{
				const foo = /*foo*/ ctx[1];
				const bar = /*bar*/ ctx[2];
				const baz = /*baz*/ ctx[3];
				const thing = /*thing*/ ctx[4];
				console.log({ foo, bar, baz, thing });
				debugger;
			}

			add_location(span, file, 8, 1, 116);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t0);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*things*/ 1 && t0_value !== (t0_value = /*thing*/ ctx[4].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*foo, bar, baz, things*/ 15) {
				const foo = /*foo*/ ctx[1];
				const bar = /*bar*/ ctx[2];
				const baz = /*baz*/ ctx[3];
				const thing = /*thing*/ ctx[4];
				console.log({ foo, bar, baz, thing });
				debugger;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("AtletikRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(8:0) {#each things as thing}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let p;
	let t1;
	let t2;
	let each_value = /*things*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			p = element("p");
			t1 = text("foo: ");
			t2 = text(/*foo*/ ctx[1]);
			add_location(p, file, 12, 0, 182);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			insert_dev(target, t0, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t1);
			append_dev(p, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*things*/ 1) {
				each_value = /*things*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t0.parentNode, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*foo*/ 2) set_data_dev(t2, /*foo*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("AtletikRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Component', slots, []);
	let { things } = $$props;
	let { foo } = $$props;
	let { bar } = $$props;
	let { baz } = $$props;

	$$self.$$.on_mount.push(function () {
		if (things === undefined && !('things' in $$props || $$self.$$.bound[$$self.$$.props['things']])) {
			console.warn("<Component> was created without expected prop 'things'");
		}

		if (foo === undefined && !('foo' in $$props || $$self.$$.bound[$$self.$$.props['foo']])) {
			console.warn("<Component> was created without expected prop 'foo'");
		}

		if (bar === undefined && !('bar' in $$props || $$self.$$.bound[$$self.$$.props['bar']])) {
			console.warn("<Component> was created without expected prop 'bar'");
		}

		if (baz === undefined && !('baz' in $$props || $$self.$$.bound[$$self.$$.props['baz']])) {
			console.warn("<Component> was created without expected prop 'baz'");
		}
	});

	const writable_props = ['things', 'foo', 'bar', 'baz'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Component> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('things' in $$props) $$invalidate(0, things = $$props.things);
		if ('foo' in $$props) $$invalidate(1, foo = $$props.foo);
		if ('bar' in $$props) $$invalidate(2, bar = $$props.bar);
		if ('baz' in $$props) $$invalidate(3, baz = $$props.baz);
	};

	$$self.$capture_state = () => ({ things, foo, bar, baz });

	$$self.$inject_state = $$props => {
		if ('things' in $$props) $$invalidate(0, things = $$props.things);
		if ('foo' in $$props) $$invalidate(1, foo = $$props.foo);
		if ('bar' in $$props) $$invalidate(2, bar = $$props.bar);
		if ('baz' in $$props) $$invalidate(3, baz = $$props.baz);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [things, foo, bar, baz];
}

class Component extends AtletikComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { things: 0, foo: 1, bar: 2, baz: 3 });

		dispatch_dev("AtletikRegisterComponent", {
			component: this,
			tagName: "Component",
			options,
			id: create_fragment.name
		});
	}

	get things() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	set things(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	get foo() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	set foo(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	get bar() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	set bar(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	get baz() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}

	set baz(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<Atletik:options accessors/>'");
	}
}

export default Component;