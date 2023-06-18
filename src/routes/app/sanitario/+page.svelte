<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import Vacinacao from './components/Vacinacao.svelte';
	import Procedimento from './components/Procedimento.svelte';
	import Exame from './components/Exame.svelte';
	import Outro from './components/Outro.svelte';

	let valueSingle = 'vacinacao';

	const drawerSettings: DrawerSettings = {
		width: 'w-[52%] md:w-[480px]',
		rounded: 'none',
		duration: 400
	};

	let subMenuItems = [
		{
			title: 'Vacinação',
			icon: 'fa-syringe',
			name: 'geral',
			value: 'vacinacao'
		},
		{
			title: 'Procedimento',
			icon: 'fa-user-doctor',
			name: 'geral',
			value: 'procedimento'
		},
		{
			title: 'Exame',
			icon: 'fa-microscope',
			name: 'geral',
			value: 'exame'
		},
		{
			title: 'Outro',
			icon: 'fa-ellipsis-h',
			name: 'geral',
			value: 'outro'
		}
	];
</script>

<div in:fade class="w-full h-full flex">
	<div class="w-[250px] h-full shadow-2xl px-4 pt-4 flex flex-col justify-start max-md:hidden">
		<h1 class="font-bold text-2xl mb-3">Sanitário</h1>
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
	<div class="w-full overflow-scroll overflow-x-hidden px-4 py-4">
		<Drawer>
			<div class="w-full flex justify-end items-end pr-3 my-2">
				<button on:click={() => drawerStore.close()}>
					<i class={`fa-solid fa-times text-2xl`} />
				</button>
			</div>
			<ListBox class="w-full">
				{#each subMenuItems as item}
					<ListBoxItem
						bind:group={valueSingle}
						name={item.name}
						value={item.value}
						rounded="none"
						on:click={() => drawerStore.close()}
					>
						<div class="flex items-center space-x-2">
							<i class={`fa-solid ${item.icon} text-xl`} />
							<span>{item.title}</span>
						</div>
					</ListBoxItem>
				{/each}
			</ListBox>
		</Drawer>
		<button
			class="w-[45px] m-5 md:hidden absolute bottom-0 left-0 bg-white rounded-full text-black p-1"
			on:click={() => drawerStore.open(drawerSettings)}
		>
			<IoMdMenu />
		</button>
		{#if valueSingle === 'vacinacao'}
			<div class="w-full" in:fade>
				<Vacinacao />
			</div>
		{:else if valueSingle === 'procedimento'}
			<div class="w-full" in:fade>
				<Procedimento />
			</div>
		{:else if valueSingle === 'exame'}
			<div class="w-full" in:fade>
				<Exame />
			</div>
		{:else if valueSingle === 'outro'}
			<div class="w-full" in:fade>
				<Outro />
			</div>
		{/if}
	</div>
</div>
