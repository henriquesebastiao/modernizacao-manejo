<script lang="ts">
	import "../theme.postcss";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.postcss";
	import {AppShell, autoModeWatcher, Toast} from "@skeletonlabs/skeleton";
	import {OpenAPI} from "../client";
	import Header from "$lib/components/Header/Header.svelte";
	import {user} from "../store";
	import {onMount} from "svelte";

	OpenAPI.BASE = 'https://api.henriquesebastiao.com';

    onMount(() => {
        const logStore: any = localStorage.getItem('isLoggedIn');

        if (logStore) {
            $user.isLoggedIn = true;
        }
    });
</script>

<div class="parent-toast">
    <Toast position="tr"/>
</div>

<svelte:head>
    {@html `<script>
import {autoModeWatcher} from "@skeletonlabs/skeleton";
${autoModeWatcher.toString()} autoModeWatcher();</script>`}
    <link href="/manifest.webmanifest" rel="manifest"/>
    <title>Modernização manejo</title>
</svelte:head>

<!-- AppShell -->
<AppShell>
    <!-- Header -->
    <svete:fragment slot="header">
        <Header/>
    </svete:fragment>

    <!-- Page Content -->
    <div class="flex items-center justify-center dynamic-width">
        <slot/>
    </div>

    <!-- Footer -->
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
