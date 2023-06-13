<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, autoModeWatcher, Toast } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition';
	import { quintOut } from "svelte/easing";
</script>

<div class="parent-toast">
	<Toast position="tr" />
</div>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

{#key $page.url}
	<div class="w-full h-full" in:blur={{ duration: 1000, easing: quintOut }}>
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
