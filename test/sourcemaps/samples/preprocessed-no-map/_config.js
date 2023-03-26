export default {
	css_map_sources: ['input.Atletik'],
	preprocess: [
		{
			style: ({ content }) => {
				// Modified without source map
				return { code: content + ' ' };
			},
			script: ({ content }) => {
				// Not modified
				return { code: content };
			}
		}
	]
};
