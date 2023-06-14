<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, autoModeWatcher, Toast } from '@skeletonlabs/skeleton';
	import { OpenAPI } from '../client';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { user } from '../store';
	import { onMount } from 'svelte';

	OpenAPI.BASE = 'http://api.henriquesebastiao.com';

	onMount(() => {
		const logStore: any = localStorage.getItem('isLoggedIn');

		if (logStore) {
			$user.isLoggedIn = true;
		}
	});
</script>

<div class="parent-toast">
	<Toast position="tr" />
</div>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

{#key $page.url}
	<div class="w-full h-full" in:fade|local={{ duration: 400 }}>
		<AppShell>
			<svelte:fragment slot="header">
				<Header />
			</svelte:fragment>
			<svelte:fragment slot="sidebarLeft"><!--Sidebar Left--></svelte:fragment>
			<svelte:fragment slot="sidebarRight"><!--Sidebar Right--></svelte:fragment>
			<svelte:fragment slot="pageHeader"><!--Page Header--></svelte:fragment>
			<!-- Router Slot -->
			<slot />
			<!-- Footer -->
			<svelte:fragment slot="pageFooter">
				<Footer />
			</svelte:fragment>
			<!--    <svelte:fragment slot="footer"></svelte:fragment>-->
		</AppShell>
	</div>
{/key}
