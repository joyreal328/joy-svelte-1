import App from './App.svelte';
import About from './About.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;