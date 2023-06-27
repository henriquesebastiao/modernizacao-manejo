<script>
	import HomeMain from '$lib/components/pages/home/HomeMain.svelte';
</script>

<div class="w-full h-full">
	<div
		id="main"
		class="bg-surface-100-800-token main-gradient max-md:h-[100%] max-md:flex max-md:items-center max-md:justify-center"
	>
		<div class="section-container"><HomeMain /></div>
	</div>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
	/* Main Gradient */
	.main-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-primary-900) / 0.4) 0px, transparent 80%);
	}
</style>
