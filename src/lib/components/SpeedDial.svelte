<script lang="ts">
	import PlusCircle from "$lib/components/PlusCircle.svelte";
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let isOpen = false;

	const appMenu = [
		{
			icon: 'fa-chart-line',
			href: '/app/relatorios'
		},
		{
			icon: 'fa-syringe',
			href: '/app/manejo'
		},
		{
			icon: 'fa-cow',
			href: '/app/animais'
		},
		{
			title: 'Adicionar',
			icon: 'fa-plus',
			href: '/app/add'
		},
		{
			icon: 'fa-gear',
			href: '/app/settings'
		}
	];

	const handleGoto = (path: string) => {
		isOpen = false;
		setTimeout(() => {
			goto(path);
		}, 200);
	};
</script>

<div class="absolute bottom-0 right-0 m-5 lg:hidden flex flex-col gap-y-7">
	{#if isOpen}
		<div
			class="flex flex-col space-y-5 items-center justify-center"
			transition:fly|local={{ y: 80, duration: 200 }}
		>
			{#each appMenu as item}
				<button
					class="card w-full h-[60px] flex items-center justify-center"
					class:border-2={$page.route.id === item.href}
					class:border-white={$page.route.id === item.href}
					on:click={() => handleGoto(item.href)}
				>
					<div class="w-[30px] h-[30px]">
						<i class={`fa-solid ${item.icon} text-2xl`}></i>
					</div>
				</button>
			{/each}
		</div>
	{/if}
	<button
		class="w-[45px]"
		class:rotate={isOpen}
		class:rotate-back={!isOpen}
		on:click={() => (isOpen = !isOpen)}
	>
		<PlusCircle />
	</button>
</div>

<style>
	.rotate {
		transform: rotate(45deg);
		transition: transform 0.2s ease-in-out;
	}

	.rotate-back {
		transform: rotate(0deg);
		transition: transform 0.2s ease-in-out;
	}
</style>
