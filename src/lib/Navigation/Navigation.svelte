<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { user } from '../../store';
	import { page } from '$app/stores';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav>
	<div
		class="flex space-x-3 max-lg:flex max-lg:justify-start max-lg:items-start max-lg:flex-col max-lg:space-y-4 max-lg:mt-4 max-lg:ml-1"
	>
		{#if !$user.isLoggedIn}
			<button
				class:bg-white={$page.route.id === '/'}
				class:text-green-900={$page.route.id === '/'}
				class:rounded-xl={$page.route.id === '/'}
				class:font-bold={$page.route.id === '/'}
				class="hover:bg-white hover:text-green-900 hover:font-bold hover:rounded-xl w-[90px]"
				><a class="btn btn-sm" href="/" on:click={drawerClose}>INÍCIO</a></button
			>
			<button
				class:bg-white={$page.route.id === '/about'}
				class:text-green-900={$page.route.id === '/about'}
				class:rounded-xl={$page.route.id === '/about'}
				class:font-bold={$page.route.id === '/about'}
				class="hover:bg-white hover:text-green-900 hover:font-bold hover:rounded-xl w-[90px]"
				><a class="btn btn-sm" href="/about" on:click={drawerClose}>SOBRE</a></button
			>
			<button
				class:bg-white={$page.route.id === '/blog'}
				class:text-green-900={$page.route.id === '/blog'}
				class:rounded-xl={$page.route.id === '/blog'}
				class:font-bold={$page.route.id === '/blog'}
				class="hover:bg-white hover:text-green-900 hover:font-bold hover:rounded-xl w-[90px]"
				><a class="btn btn-sm" href="/blog" on:click={drawerClose}>BLOG</a></button
			>
			<button
				class:bg-white={$page.route.id === '/pricing'}
				class:text-green-900={$page.route.id === '/pricing'}
				class:rounded-xl={$page.route.id === '/pricing'}
				class:font-bold={$page.route.id === '/pricing'}
				class="hover:bg-white hover:text-green-900 hover:font-bold hover:rounded-xl w-[90px]"
				><a class="btn btn-sm" href="/pricing" on:click={drawerClose}>PLANOS</a></button
			>
			<button
				class:bg-white={$page.route.id === '/support'}
				class:text-green-900={$page.route.id === '/support'}
				class:rounded-xl={$page.route.id === '/support'}
				class:font-bold={$page.route.id === '/support'}
				class="hover:bg-white hover:text-green-900 hover:font-bold hover:rounded-xl w-[90px]"
				><a class="btn btn-sm" href="/support" on:click={drawerClose}>SUPORTE</a></button
			>
		{/if}
	</div>
</nav>
