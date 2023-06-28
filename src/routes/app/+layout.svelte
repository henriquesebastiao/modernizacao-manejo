<script lang="ts">
	import { user } from '../../store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { OpenAPI } from '../../client';

	OpenAPI.TOKEN = localStorage.getItem('token');

	onMount(() => {
		if (!localStorage.getItem('isLoggedIn') || $user.isLoggedIn === false) {
			goto('/login');
		}
	});
</script>

<div class="w-full h-full flex relative">
	<slot />
</div>
