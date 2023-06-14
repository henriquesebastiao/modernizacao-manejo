<script lang="ts">
	import { user } from '../../store';
	import FaDatabase from 'svelte-icons/fa/FaDatabase.svelte';
	import FaClipboard from 'svelte-icons/fa/FaClipboard.svelte';
	import MdSettings from 'svelte-icons/md/MdSettings.svelte';
	import GoSettings from 'svelte-icons/go/GoSettings.svelte';
	import SpeedDial from '$lib/components/SpeedDial.svelte';

	const appMenu = [
		{
			name: 'Relatórios',
			icon: FaDatabase,
			path: '/app/reports'
		},
		{
			name: 'Manejo',
			icon: FaClipboard,
			path: '/app/reports'
		},
		{
			name: 'Planejamento',
			icon: GoSettings,
			path: '/app/reports'
		}
	];
</script>

<div class="w-full h-full pt-6">
	<div class="card w-[98%] h-full m-auto flex rounded-none shadow-xl relative">
		<div
			class="w-[220px] border-r-[1px] flex flex-col justify-between max-lg:hidden"
			class:custom-border={$user.isDarkMode}
		>
			<div>
				{#each appMenu as item}
					<button
						class="w-full h-[60px] flex items-center justify-start pl-4 space-x-3 border-b-[2px]"
						class:custom-border={$user.isDarkMode}
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
					class="w-full h-[60px] flex items-center justify-start pl-4 space-x-3 border-t-[2px]"
					class:custom-border={$user.isDarkMode}
				>
					<div class="w-[20px]">
						<svelte:component this={MdSettings} />
					</div>
					<span>Configurações</span>
				</button>
			</div>
		</div>
		<div>
			<slot />
		</div>
		<SpeedDial />
	</div>
</div>

<style>
	.custom-border {
		border-color: #002715;
	}
</style>
