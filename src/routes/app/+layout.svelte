<script lang="ts">
	import MenusSideBar from '$lib/components/MenusSideBar/MenusSideBar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';
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
	<div class="w-[80px] max-lg:hidden">
		<MenusSideBar />
	</div>
	<div class="dynamic-width max-lg:!w-full">
		<slot />
	</div>
	<SpeedDial />
</div>

<style>
	.dynamic-width {
		width: calc(100% - 80px);
	}
</style>
