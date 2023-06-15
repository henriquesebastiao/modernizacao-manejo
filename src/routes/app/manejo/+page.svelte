<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	let valueSingle: string = 'vacinacao';

	const drawerSettings: DrawerSettings = {
		width: 'w-[280px] md:w-[480px]',
		rounded: 'none'
	};

	let subMenuItems = [
		{
			title: 'Vacinação',
			icon: 'fa-syringe',
			name: 'geral',
			value: 'vacinacao'
		},
		{
			title: 'Pesagem',
			icon: 'fa-weight-scale',
			name: 'geral',
			value: 'pesagem'
		}
	];
</script>

<div in:fade class="w-full h-full flex">
	<div class="w-[250px] h-full shadow-2xl px-4 pt-4 flex justify-start max-md:hidden">
		<ListBox class="w-full">
			{#each subMenuItems as item}
				<ListBoxItem bind:group={valueSingle} name={item.name} value={item.value} rounded="none">
					<div class="flex items-center space-x-2">
						<i class={`fa-solid ${item.icon} text-xl`} />
						<span>{item.title}</span>
					</div>
				</ListBoxItem>
			{/each}
		</ListBox>
	</div>
	<div class="w-full h-full px-4 pt-4">
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
		<div class="mb-3 md:hidden">
			<button on:click={() => drawerStore.open(drawerSettings)}>
				<i class={`fa-solid fa-bars text-2xl`} />
			</button>
		</div>
		{#if valueSingle === 'vacinacao'}
			<div in:fade>
				<h1 class="text-2xl">Vacinação</h1>
			</div>
		{:else if valueSingle === 'pesagem'}
			<div in:fade>
				<h1 class="text-2xl">Pesagem</h1>
			</div>
		{/if}
	</div>
</div>
