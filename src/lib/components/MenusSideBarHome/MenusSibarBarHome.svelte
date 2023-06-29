<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	// hrefs do menu
	const menuItems = [
		{ href: '/', label: 'INÍCIO', icon: 'home' },
		{ href: '/about', label: 'SOBRE', icon: 'circle-info' },
		{ href: '/blog', label: 'BLOG', icon: 'blog' },
		{ href: '/pricing', label: 'PLANOS', icon: 'box' },
		{ href: '/suporte', label: 'SUPORTE', icon: 'phone' }
	];

	let currentTile: number = 0;
</script>

<AppRail>
	<svelte:fragment slot="lead">
		{#each menuItems as section}
			{#if !$page.route.id?.includes('/app')}
				<AppRailTile
					slot="lead"
					name={section.label}
					value={section.label}
					title={section.label}
					on:click={() => goto(section.href)}
					bind:group={currentTile}
				>
					<svelte:fragment slot="lead"
						><i class={`fa-solid fa-${section.icon} text-2xl`} /></svelte:fragment
					>
					<span>{section.label}</span>
				</AppRailTile>
			{/if}
		{/each}
	</svelte:fragment>
</AppRail>
