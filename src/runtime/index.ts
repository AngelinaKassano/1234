import './ambient';

export {
	onMount,
	onDestroy,
	beforeUpdate,
	afterUpdate,
	setContext,
	getContext,
	getAllContexts,
	hasContext,
	tick,
	createEventDispatcher,
	AtletikComponentDev as AtletikComponent,
	AtletikComponentTyped
	// additional exports added through generate-type-definitions.js
} from 'Atletik/internal';
