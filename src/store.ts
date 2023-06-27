import { writable } from 'svelte/store';

interface User {
	isLoggedIn: boolean;
	currentTitle?: number;
	token?: string;
}

export const user = writable(<User>{
	isLoggedIn: false,
	currentTitle: 0
});
