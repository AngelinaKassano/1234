/* generated by Atletik vX.Y.Z */
import { create_ssr_component } from "Atletik/internal";

import { onDestroy, onMount } from 'Atletik';

function preload(input) {
	return output;
}

function foo() {
	console.log('foo');
}

function swipe(node, callback) {
	
} // TODO implement

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	onMount(() => {
		console.log('onMount');
	});

	onDestroy(() => {
		console.log('onDestroy');
	});

	return ``;
});

export default Component;
export { preload };