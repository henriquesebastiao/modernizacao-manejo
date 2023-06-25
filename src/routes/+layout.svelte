<script lang="ts">
	import "../theme.postcss";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.postcss";
	import { autoModeWatcher, Toast } from "@skeletonlabs/skeleton";
	import { OpenAPI } from "../client";
	import Header from "$lib/components/Header/Header.svelte";
	import { user } from "../store";
	import { onMount } from "svelte";

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
	<link href="/manifest.webmanifest" rel="manifest" />
	<title>Modernização manejo</title></svelte:head
>

<div class="w-full h-full">
	<div class="w-full h-[75px]">
		<Header />
	</div>
	<div class="w-full dynamic-width">
		<slot />
	</div>
</div>

<style>
	.dynamic-width {
		height: calc(100% - 75px);
	}
</style>
