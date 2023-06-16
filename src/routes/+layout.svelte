<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, autoModeWatcher, Toast } from '@skeletonlabs/skeleton';
	import { OpenAPI } from '../client';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { user } from '../store';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	OpenAPI.BASE = 'https://api.henriquesebastiao.com';

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
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
	<link rel="manifest" href="/manifest.webmanifest" />
	<title>Modernização manejo</title></svelte:head
>

<div class="w-full h-full" in:fade>
	<AppShell>
		<svelte:fragment slot="header">
			<Header />
		</svelte:fragment>

		<slot />

		<svelte:fragment slot="footer">
			{#if !$user.isLoggedIn}
				<Footer />
			{/if}
		</svelte:fragment>
	</AppShell>
</div>
