<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import { OpenAPI } from '../client';
	import Header from '$lib/components/Header/Header.svelte';
	import { user } from '../store';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
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
		return !pageUrlPath.includes('/app');
	}

	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'lg:w-auto';
</script>

<svelte:head>
	<link href="/manifest.webmanifest" rel="manifest" />
	<title>Modernização manejo</title>
</svelte:head>

<div class="parent-toast">
	<Toast position="tr" />
</div>

<AppShell {slotSidebarLeft}>
	<svete:fragment slot="header">
		<Header />
	</svete:fragment>
	<svelte:fragment slot="sidebarLeft">
		<MenusSideBar class="hidden lg:grid w-[360px] overflow-hidden" />
		<SpeedDial />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
