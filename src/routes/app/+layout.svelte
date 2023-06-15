<script lang="ts">
	import MenusSideBar from '$lib/components/MenusSideBar/MenusSideBar.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell class="shadow-xl relative">
	<svelte:fragment slot="sidebarLeft">
		<MenusSideBar />
	</svelte:fragment>
	<slot />
	<SpeedDial />
</AppShell>
