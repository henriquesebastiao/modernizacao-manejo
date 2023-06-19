<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import AdicionarAnimal from './components/AdicionarAnimal.svelte';
	import RemoverAnimal from './components/RemoverAnimal.svelte';
	import Pesagem from './components/Pesagem.svelte';

	let valueSingle = 'adicionar_animal';

	const drawerSettings: DrawerSettings = {
		width: 'w-[52%] md:w-[480px]',
		rounded: 'none',
		duration: 400
	};

	let subMenuItems = [
		{
			title: 'Adicionar Animal',
			icon: 'fa-cow',
			name: 'geral',
			value: 'adicionar_animal'
		},
		{
			title: 'Saída de Animal',
			icon: 'fa-arrow-right-from-bracket',
			name: 'geral',
			value: 'remover_animal'
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
	<div class="w-[250px] h-full shadow-2xl px-4 pt-4 flex flex-col justify-start max-md:hidden">
		<h1 class="font-bold text-2xl mb-3">Manejo</h1>
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
			<div class="flex w-full h-full flex-col">
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
			</div>
		</Drawer>
		<button
			class="w-[45px] m-5 md:hidden absolute bottom-0 left-0 bg-white rounded-full text-black p-1"
			on:click={() => drawerStore.open(drawerSettings)}
		>
			<IoMdMenu />
		</button>
		{#if valueSingle === 'adicionar_animal'}
			<div class="w-full" in:fade>
				<AdicionarAnimal />
			</div>
		{:else if valueSingle === 'remover_animal'}
			<div class="w-full" in:fade>
				<RemoverAnimal />
			</div>
		{:else if valueSingle === 'pesagem'}
			<div class="w-full" in:fade>
				<Pesagem />
			</div>
		{/if}
	</div>
</div>
