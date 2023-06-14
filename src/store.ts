import { writable } from 'svelte/store';

interface User {
	isLoggedIn: boolean;
}

export const user = writable(<User>{
	isLoggedIn: false
});
