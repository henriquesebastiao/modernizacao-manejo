<script lang="ts">
	import { AppRail, AppRailTile, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { user } from '../../../store';
	import { menuNavLinks } from '$lib/links';

	$: currentPage = $page.route.id;
	$: currentTile = $user.currentTitle;

	let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;

	let appRailMenuItems = [
		{
			title: 'Relatórios',
			icon: 'fa-chart-line',
			href: '/app/relatorios',
			value: 1
		},
		{
			title: 'Manejo',
			icon: 'fa-syringe',
			href: '/app/manejo',
			value: 2
		},
		{
			title: 'Sanitário',
			icon: 'fa-vial-circle-check',
			href: '/app/sanitario',
			value: 3
		},
		{
			title: 'Cria',
			icon: 'fa-cow',
			href: '/app/cria',
			value: 4
		},
		{
			title: 'Lotes',
			icon: 'fa-tree',
			href: '/app/lotes',
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

	let valueSingle = 'geral';

	$: submenu = menuNavLinks[currentRailCategory ?? '/app/relatorios'];
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

	<div class="w-[250px] h-full shadow-2xl px-4 pt-4 flex justify-start flex-col max-md:hidden">
		<h1 class="font-bold text-2xl mb-3">Relatórios</h1>
		<ListBox class="w-full">
			{#each subMenuItems as item}
				<ListBoxItem bind:group={valueSingle} name={item.name} value={item.value}>
					<div class="flex items-center space-x-2">
						<i class={`fa-solid ${item.icon} text-xl`} />
						<span>{item.title}</span>
					</div>
				</ListBoxItem>
			{/each}
		</ListBox>
	</div>
</div>
