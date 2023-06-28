<script lang="ts">
	import { drawerStore, Drawer } from '@skeletonlabs/skeleton';
	import MenusSideBar from '$lib/components/MenusSideBar/MenusSideBar.svelte';
	import Navigation from '$lib/Navigation/Navigation.svelte';

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
	{#if $drawerStore.id === 'doc-sidenav'}
		<!-- Doc Sidebar -->
		<MenusSideBar embedded={true} />
	{:else}
		<!-- Drawer home -->
		<Navigation />
	{/if}
</Drawer>
