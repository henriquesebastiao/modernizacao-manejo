<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import { OpenAPI } from '../client';
	import Header from '$lib/components/Header/Header.svelte';
	import { user } from '../store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import MenusSideBar from '$lib/components/MenusSideBar/MenusSideBar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';

	OpenAPI.BASE = 'https://api.henriquesebastiao.com';

	onMount(() => {
		const logStore: any = localStorage.getItem('isLoggedIn');

		if (logStore) {
			$user.isLoggedIn = true;
		}
	});

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage app shell is not rendered
		return !pageUrlPath.includes('/app');
	}

	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'lg:w-auto';
</script>

<svelte:head>
	<link href="/manifest.webmanifest" rel="manifest" />
	<title>Modernização manejo</title>
</svelte:head>

<!-- Overlays -->
<div class="parent-toast">
	<Toast position="tr" />
</div>

<!-- App Shell -->
<AppShell {slotSidebarLeft} regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
	<!-- Header -->
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<MenusSideBar class="hidden lg:grid w-[300px] overflow-hidden" />
		<SpeedDial class="lg:hidden fixed bottom-4 right-4" />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />
</AppShell>
