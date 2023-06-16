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

<div class="w-full h-full">
	<div class="w-full h-[75px]">
		<Header />
	</div>
	<div class="w-full dinamic-height">
		<slot />
	</div>
</div>

<style>
	.dinamic-height {
		height: calc(100% - 75px);
	}
</style>
