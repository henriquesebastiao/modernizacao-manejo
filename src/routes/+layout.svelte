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

	OpenAPI.BASE = 'https://api.henriquesebastiao.com';

	onMount(() => {
		const logStore: any = localStorage.getItem('isLoggedIn');

		if (logStore) {
			$user.isLoggedIn = true;
		}
	});
</script>

<svelte:head>
	<link href="/manifest.webmanifest" rel="manifest" />
	<title>Modernização manejo</title>
</svelte:head>

<AppShell>
	<svete:fragment slot="header">
		<div class="parent-toast">
			<Toast position="tr" />
		</div>
		<Header />
	</svete:fragment>
	<div class="flex items-center justify-center dynamic-width">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

<style>
	.dynamic-width {
		height: calc(100% - 75px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
