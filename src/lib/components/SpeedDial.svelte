<script lang="ts">
	import PlusCircle from '$lib/components/PlusCircle.svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';

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
			icon: 'fa-vial-circle-check',
			href: '/app/sanitario'
		},
		{
			icon: 'fa-cow',
			href: '/app/cria'
		},
		{
			icon: 'fa-tree',
			href: '/app/lotes'
		},
		{
			icon: 'fa-cash-register',
			href: '/app/financeiro'
		},
		{
			icon: 'fa-gear',
			href: '/app/settings'
		}
	];

	let modalRef: HTMLDivElement;

	const handleGoto = (path: string) => {
		isOpen = false;
		setTimeout(() => {
			goto(path);
		}, 200);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef && !modalRef.contains(event.target as Node)) {
			isOpen = false;
		}
	};

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.addEventListener('mousedown', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	});
</script>

<div
	class="absolute w-[60px] max-small:w-[45px] bottom-0 right-0 m-5 lg:hidden flex flex-col items-center gap-y-7"
	bind:this={modalRef}
>
	{#if isOpen}
		<div
			class="flex flex-col space-y-5 items-center justify-center w-full"
			transition:fly|local={{ y: 80, duration: 200 }}
		>
			{#each appMenu as item}
				<button
					class="card w-full h-[60px] max-small:h-[45px] flex items-center justify-center rounded-full"
					class:border-2={$page.route.id === item.href}
					class:border-white={$page.route.id === item.href}
					on:click={() => handleGoto(item.href)}
				>
					<i class={`fa-solid ${item.icon} text-2xl max-small:text-xl`} />
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
