<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { user } from '../../../store';

	$: currentPage = $page.route.id;
	$: currentTile = $user.currentTitle;

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
</script>

<AppRail class="w-full h-full">
	{#each appRailMenuItems as item}
		<AppRailTile
			bind:group={currentTile}
			name="tile-2"
			value={item.value}
			title="tile-2"
			class={`${item.href === currentPage ? 'bg-primary-active-token' : ''}`}
			on:click={() => goto(item.href)}
		>
			<svelte:fragment slot="lead"><i class={`fa-solid ${item.icon} text-2xl`} /></svelte:fragment>
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
