<script lang="ts">
	import { AppRail, AppRailTile, drawerStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { menuNavLinks } from '$lib/links';

	// Local
	let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;

	// Lifecycle
	page.subscribe((page) => {
		// ex: /basePath/...
		let basePath: string = page.url.pathname.split('/')[2];
		if (!basePath) return;
		// Translate base path to link section
		if (['manejo'].includes(basePath)) currentRailCategory = '/app/manejo';
		if (['relatorios'].includes(basePath)) currentRailCategory = '/app/relatorios';
		if (['sanitario'].includes(basePath)) currentRailCategory = '/app/sanitario';
		if (['cria'].includes(basePath)) currentRailCategory = '/app/cria';
		if (['lotes'].includes(basePath)) currentRailCategory = '/app/lotes';
		if (['financeiro'].includes(basePath)) currentRailCategory = '/app/financeiro';
		if (['ajustes'].includes(basePath)) currentRailCategory = '/app/ajustes';
	});

	$: submenu = menuNavLinks[currentRailCategory ?? '/app/manejo'];
	$: listboxItemActive = (href: string) =>
		$page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '';
</script>

<div
	class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ??
		''}"
>
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		{#each Object.keys(menuNavLinks) as section}
			{#each menuNavLinks[section] as item}
				<AppRailTile
					slot={item.slot}
					name={section}
					value={item.title}
					title={item.title}
					on:click={() => goto(section)}
				>
					<svelte:fragment slot="lead"
						><i class={`fa-solid ${item.badge} text-2xl`} /></svelte:fragment
					>
					<span>{item.title}</span>
				</AppRailTile>
			{/each}
		{/each}
	</AppRail>

	<!-- Submenu Lateral -->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each submenu as segment, i}
			<!-- Title -->
			<p class="font-bold pl-4 text-2xl">{segment.title}</p>
			<!-- Nav List -->
			<nav class="list-nav">
				<ul>
					{#each segment.list as { href, label, badge }}
						<li on:keypress on:click={drawerStore.close}>
							<a href="/{href}" class={listboxItemActive(href)} data-sveltekit-preload-data="hover">
								{#if badge}<i class="fa-solid {badge}" />{/if}
								<span class="flex-auto">{@html label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/each}
	</section>
</div>
