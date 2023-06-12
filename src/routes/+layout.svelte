<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, autoModeWatcher, Toast } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<div class="parent-toast">
	<Toast position="tr" />
</div>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

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
