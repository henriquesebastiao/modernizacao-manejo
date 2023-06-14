import { writable } from 'svelte/store';

interface User {
	isLoggedIn: boolean;
	isDarkMode: boolean;
}

export const user = writable(<User>{
	isLoggedIn: false,
	isDarkMode: false
});
