<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import IoIosArrowDropleftCircle from 'svelte-icons/io/IoIosArrowDropleftCircle.svelte'

	let valueSingle: string = 'geral';

	const drawerSettings: DrawerSettings = {
		width: 'w-[280px] md:w-[480px]',
		rounded: 'none'
	};

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
</script>

<div in:fade class="w-full h-full flex">
	<div class="w-[250px] h-full shadow-2xl px-4 pt-4 flex justify-start flex-col max-md:hidden">
		<h1 class="font-bold text-2xl mb-3">Relatórios</h1>
		<ListBox class="w-full">
			{#each subMenuItems as item}
				<ListBoxItem bind:group={valueSingle} name={item.name} value={item.value}>
					<div class="flex items-center space-x-2">
						<i class={`fa-solid ${item.icon} text-xl`}></i>
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
					<i class={`fa-solid fa-times text-2xl`}></i>
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
							<i class={`fa-solid ${item.icon} text-xl`}></i>
							<span>{item.title}</span>
						</div>
					</ListBoxItem>
				{/each}
			</ListBox>
		</Drawer>
		<div class="md:hidden absolute bottom-0 right-0 mr-[4.7em] mb-2">
			<button class="w-[54px]" on:click={() => drawerStore.open(drawerSettings)}>
				<IoIosArrowDropleftCircle />
			</button>
		</div>
		{#if valueSingle === 'geral'}
			<div in:fade>
				<h1 class="text-2xl">Relatório geral</h1>
			</div>
		{:else if valueSingle === 'lote'}
			<div in:fade>
				<h1 class="text-2xl">Relatório lote</h1>
			</div>
		{/if}
	</div>
</div>
