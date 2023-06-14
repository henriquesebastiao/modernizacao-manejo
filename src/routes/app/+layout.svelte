<script lang="ts">
	import { user } from '../../store';
	import { page } from '$app/stores';
	import FaDatabase from 'svelte-icons/fa/FaDatabase.svelte';
	import FaClipboard from 'svelte-icons/fa/FaClipboard.svelte';
	import MdSettings from 'svelte-icons/md/MdSettings.svelte';
	import GoSettings from 'svelte-icons/go/GoSettings.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	$: currentPage = $page.route.id;

	const appMenu = [
		{
			name: 'Relatórios',
			icon: FaDatabase,
			path: '/app/relatorios'
		},
		{
			name: 'Manejo',
			icon: FaClipboard,
			path: '/app/manejo'
		},
		{
			name: 'Planejamento',
			icon: GoSettings,
			path: '/app/planejamento'
		}
	];
</script>

<div class="w-full h-full pt-6" in:fade>
	<div class="card w-[98%] h-full m-auto flex rounded-none shadow-xl relative">
		<div
			class="w-[220px] border-r-[1px] flex flex-col justify-between max-lg:hidden"
			class:custom-border={$user.isDarkMode}
		>
			<div>
				{#each appMenu as item}
					<button
						class={`w-full h-[60px] flex items-center justify-start pl-4 space-x-3 border-b-[2px] transition-all ${
							$user.isDarkMode
								? 'hover:bg-white hover:text-[#002715]'
								: 'hover:bg-[#002715] hover:text-white'
						}`}
						class:custom-border={$user.isDarkMode}
						class:active-btn-dark={currentPage === item.path && $user.isDarkMode}
						class:active-btn-light={currentPage === item.path && !$user.isDarkMode}
						on:click={() => goto(item.path)}
					>
						<div class="w-[20px]">
							<svelte:component this={item.icon} />
						</div>
						<span>{item.name}</span>
					</button>
				{/each}
			</div>
			<div>
				<button
					class={`w-full h-[60px] flex items-center justify-start pl-4 space-x-3 border-b-[2px] transition-all ${
						$user.isDarkMode
							? 'hover:bg-white hover:text-[#002715]'
							: 'hover:bg-[#002715] hover:text-white'
					}`}
					class:custom-border={$user.isDarkMode}
					class:active-btn-dark={currentPage === '/app/configuracoes' && $user.isDarkMode}
					class:active-btn-light={currentPage === '/app/configuracoes' && !$user.isDarkMode}
					on:click={() => goto('/app/configuracoes')}
				>
					<div class="w-[20px]">
						<svelte:component this={MdSettings} />
					</div>
					<span>Configurações</span>
				</button>
			</div>
		</div>
		<div class="py-4 px-3">
			<slot />
		</div>
		<SpeedDial />
	</div>
</div>

<style>
	.custom-border {
		border-color: #002715;
	}

	.active-btn-dark {
		background: white;
		color: #002715;
	}

	.active-btn-light {
		background: #002715;
		color: white;
	}
</style>
