<script lang='ts'>
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
    import {AppShell} from "@skeletonlabs/skeleton";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>


<AppShell>
    <svelte:fragment slot="header">
        <Header />
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
    <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
    <svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
    <svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
