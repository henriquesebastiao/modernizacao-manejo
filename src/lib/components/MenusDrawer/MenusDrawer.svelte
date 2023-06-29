<script lang="ts">
	import { drawerStore, Drawer } from '@skeletonlabs/skeleton';
	import MenusSideBar from '$lib/components/MenusSideBar/MenusSideBar.svelte';
	import MenusSibarBarHome from "$lib/components/MenusSideBarHome/MenusSibarBarHome.svelte";
	import Navigation from '$lib/Navigation/Navigation.svelte';

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';

	// Verifica a largura da tela para saber se é mobile
	let isMobile = () => {
		return screen.width <= 1023;
	}
</script>

<Drawer class={classesDrawer}>
	{#if $drawerStore.id === 'doc-sidenav'}
		<!-- Doc Sidebar -->
		<MenusSideBar embedded={true} />
	{:else}
		<!-- Home Sidebar -->
		<!-- Verifica qual menu deve mostrar de acordo com a largura da tela -->
		{#if isMobile()}
			<MenusSibarBarHome />
		{:else}
			<Navigation />
		{/if}
	{/if}
</Drawer>
