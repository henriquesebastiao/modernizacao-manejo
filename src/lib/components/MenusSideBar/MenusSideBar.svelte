<script lang="ts">
	import { AppRail, AppRailTile, drawerStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { user } from '../../../store';
	import { menuNavLinks } from '$lib/links';

	$: currentPage = $page.route.id;
	$: currentTile = $user.currentTitle;

	// Local
	let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;

	let appRailMenuItems = [
		{
			title: 'Relatórios',
			icon: 'fa-chart-line',
			href: '/app/relatorios/relatorio_geral',
			value: 1
		},
		{
			title: 'Manejo',
			icon: 'fa-syringe',
			href: '/app/manejo/adicionar_animal',
			value: 2
		},
		{
			title: 'Sanitário',
			icon: 'fa-vial-circle-check',
			href: '/app/sanitario/vacinacao',
			value: 3
		},
		{
			title: 'Cria',
			icon: 'fa-cow',
			href: '/app/cria/desmama',
			value: 4
		},
		{
			title: 'Lotes',
			icon: 'fa-tree',
			href: '/app/lotes/troca_de_lote',
			value: 5
		},
		{
			title: 'Financeiro',
			icon: 'fa-cash-register',
			href: '/app/financeiro',
			value: 6
		}
	];

	let subMenuItems = [
		{
			title: 'Relatório geral',
			icon: 'fa-chart-line',
			name: 'geral',
			value: 'geral'
		},
		{
			title: 'Relatório lote',
			icon: 'fa-tree',
			name: 'geral',
			value: 'lote'
		}
	];

	// Lifecycle
	page.subscribe((page) => {
		// ex: /basePath/...
		let basePath: string = page.url.pathname.split('/')[2];
		if (!basePath) return;
		// Translate base path to link section
		if (['manejo'].includes(basePath)) currentRailCategory = '/manejo';
		if (['relatorios'].includes(basePath)) currentRailCategory = '/relatorios';
		if (['sanitario'].includes(basePath)) currentRailCategory = '/sanitario';
		if (['cria'].includes(basePath)) currentRailCategory = '/cria';
		if (['lote'].includes(basePath)) currentRailCategory = '/lote';
		if (['finaceiro'].includes(basePath)) currentRailCategory = '/finaceiro';
		if (['ajuste'].includes(basePath)) currentRailCategory = '/ajuste';
	});

	$: submenu = menuNavLinks[currentRailCategory ?? '/manejo'];
	$: listboxItemActive = (href: string) =>
		$page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '';
</script>

<div
	class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ??
		''}"
>
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		{#each appRailMenuItems as item}
			<AppRailTile
				bind:group={currentTile}
				name="tile-2"
				value={item.value}
				title="tile-2"
				class={`${item.href === currentPage ? 'bg-primary-active-token' : ''}`}
				on:click={() => goto(item.href)}
			>
				<svelte:fragment slot="lead"><i class={`fa-solid ${item.icon} text-2xl`} /></svelte:fragment
				>
				<span>{item.title}</span>
			</AppRailTile>
		{/each}

		<!-- Configurações -->
		<AppRailTile
			slot="trail"
			bind:group={currentTile}
			name="utilities"
			value={5}
			class={`${currentPage === 'app/settings' ? 'bg-primary-active-token' : ''}`}
			on:click={() => goto('/app/settings')}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-gear text-2xl" /></svelte:fragment>
			<span>Ajustes</span>
		</AppRailTile>
	</AppRail>

	<!-- Submenu Lateral -->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each submenu as segment, i}
			<!-- Title -->
			<p class="font-bold pl-4 text-2xl">{segment.title}</p>
			<!-- Nav List -->
			<nav class="list-nav">
				<ul>
					{#each segment.list as { href, label, badge, default_path }}
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
