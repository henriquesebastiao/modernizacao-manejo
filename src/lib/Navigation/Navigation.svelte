<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const menuItems = [
		{ id: '/', label: 'INÍCIO' },
		{ id: '/about', label: 'SOBRE' },
		{ id: '/blog', label: 'BLOG' },
		{ id: '/pricing', label: 'PLANOS' },
		{ id: '/suporte', label: 'SUPORTE' }
	];

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav>
	<div
		class="flex space-x-3 max-lg:flex max-lg:justify-start max-lg:items-start max-lg:flex-col max-lg:space-y-4 max-lg:mt-4 max-lg:ml-1"
	>
		{#each menuItems as item}
			{#if !$page.route.id?.includes('/app')}
				<button
					class:variant-filled={$page.route.id === item.id}
					class:rounded-xl={$page.route.id === item.id}
					class:font-bold={$page.route.id === item.id}
					class="hover:variant-filled hover:font-bold hover:rounded-xl w-[90px]"
				>
					<a class="btn btn-sm" href={item.id} on:click={drawerClose}>{item.label}</a>
				</button>
			{/if}
		{/each}
	</div>
</nav>
