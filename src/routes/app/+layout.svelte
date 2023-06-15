<script lang="ts">
	import MenusSideBar from '$lib/components/MenusSideBar/MenusSideBar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { user } from '../../store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		if (!localStorage.getItem('isLoggedIn') || $user.isLoggedIn === false) {
			goto('/login');
		}
	});
</script>

<AppShell class="shadow-xl relative">
	<svelte:fragment slot="sidebarLeft">
		<MenusSideBar />
	</svelte:fragment>
	<slot />
	<SpeedDial />
</AppShell>
