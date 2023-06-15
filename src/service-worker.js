// svelte.config.js
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		files: {
			serviceWorker: 'src/my-sw.js' // or `src/my-sw.ts`
		}
	}
};

export default config;
