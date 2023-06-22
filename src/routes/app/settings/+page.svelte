<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';

	let valueSingle = 'perfil';

	const drawerSettings: DrawerSettings = {
		width: 'w-[52%] md:w-[480px]',
		rounded: 'none',
		duration: 400
	};

	let subMenuItems = [
		{
			title: 'Perfil',
			icon: 'fa-user',
			name: 'perfil',
			value: 'perfil'
		},
		{
			title: 'Planos',
			icon: 'fa-money-check',
			name: 'planos',
			value: 'planos'
		}
	];
</script>

<div in:fade class="w-full h-full flex">
	<div class="w-[250px] h-full shadow-2xl px-4 pt-4 flex justify-start flex-col max-md:hidden">
		<h1 class="font-bold text-2xl mb-3">Configurações</h1>
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
			class="w-[45px] m-5 md:hidden absolute bottom-0 left-0 bg-white rounded-full text-black p-1 z-50"
			on:click={() => drawerStore.open(drawerSettings)}
		>
			<IoMdMenu />
		</button>
		{#if valueSingle === 'perfil'}
			<div in:fade>
				<h1 class="text-2xl">Perfil screen</h1>
			</div>
		{:else if valueSingle === 'planos'}
			<div in:fade>
				<h1 class="text-2xl">Planos screen</h1>
			</div>
		{/if}
	</div>
</div>
