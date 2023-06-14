<script lang="ts">
	import FaPlusCircle from 'svelte-icons/fa/FaPlusCircle.svelte';
	import FaDatabase from 'svelte-icons/fa/FaDatabase.svelte';
	import FaClipboard from 'svelte-icons/fa/FaClipboard.svelte';
	import MdSettings from 'svelte-icons/md/MdSettings.svelte';
	import GoSettings from 'svelte-icons/go/GoSettings.svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let isOpen = false;

	const appMenu = [
		{
			icon: FaDatabase,
			path: '/app/reports'
		},
		{
			icon: FaClipboard,
			path: '/app/manejo'
		},
		{
			icon: GoSettings,
			path: '/app/reports'
		},
		{
			icon: MdSettings,
			path: '/app/reports'
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
					on:click={() => handleGoto(item.path)}
				>
					<div class="w-[30px] h-[30px]">
						<svelte:component this={item.icon} />
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
		<FaPlusCircle />
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
