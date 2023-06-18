<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const menuItems = [
		{ href: '/', label: 'INÍCIO' },
		{ href: '/about', label: 'SOBRE' },
		{ href: '/blog', label: 'BLOG' },
		{ href: '/pricing', label: 'PLANOS' },
		{ href: '/suporte', label: 'SUPORTE' }
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
					class:variant-filled={$page.route.id === item.href}
					class:rounded-xl={$page.route.id === item.href}
					class:font-bold={$page.route.id === item.href}
					class="hover:variant-filled hover:font-bold hover:rounded-xl w-[90px]"
				>
					<a class="btn btn-sm" href={item.href} on:click={drawerClose}>{item.label}</a>
				</button>
			{/if}
		{/each}
	</div>
</nav>
