<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

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
			title: 'Animais',
			icon: 'fa-cow',
			href: '/app/animais',
			value: 3
		},
		{
			title: 'Adicionar',
			icon: 'fa-plus',
			href: '/app/add',
			value: 4
		}
	];

	let currentTile: number = 0;
</script>

<AppRail class="max-lg:hidden">
	{#each appRailMenuItems as item}
		<AppRailTile
			bind:group={currentTile}
			name="tile-2"
			value={item.value}
			title="tile-2"
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
		on:click={() => goto('/app/settings')}
	>
		<svelte:fragment slot="lead"><i class="fa-solid fa-gear text-2xl" /></svelte:fragment>
		<span>Ajustes</span>
	</AppRailTile>
</AppRail>
