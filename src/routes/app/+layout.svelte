<script lang="ts">
    // Menus Components
    import MenusSideBar from "$lib/components/MenusSideBar/MenusSideBar.svelte";
    import MenusDrawer from "$lib/components/MenusDrawer/MenusDrawer.svelte";
    import SpeedDial from "$lib/components/SpeedDial.svelte";
    import {AppShell} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";

    function matchPathWhitelist(pageUrlPath: string): boolean {
        // If homepage route
        if (pageUrlPath === '/') return true;
        // If any blog route
        return pageUrlPath.includes('/blog');

    }

    // Disable left sidebar on homepage
    $: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-auto';
</script>

<!-- Overlays -->

<AppShell {slotSidebarLeft} regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
    <!-- Sidebar (Left) -->
    <svelte:fragment slot="sidebarLeft">
        <MenusSideBar class="hidden lg:grid w-[360px] overflow-hidden" />
    </svelte:fragment>

    <!-- SpeedDial -->


    <!-- Page Content -->
    <slot />
    <div>
        <SpeedDial />
    </div>
</AppShell>